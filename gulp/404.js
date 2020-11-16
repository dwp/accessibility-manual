const env = (process.env.NODE_ENV)

if (env !== 'production') {
  const gulp = require('gulp')
  const colors = require('colors')
  const cheerio = require('cheerio')
  const got = require('got')

  // Build URLS from JSON
  const { navItems } = require('../app/views/_globals/navigation-data.json')
  const prefix = `http://localhost:${process.env.AXEPORT || 3000}`
  const urls = []
  urls.push(prefix)
  navItems.forEach(function (navObject) {
    urls.push(`${prefix}${navObject.link}`)
    navObject.subsections.forEach(function (section) {
      section.subsections.forEach(function (subNav) {
        urls.push(`${prefix}${subNav.link}`)
      })
    })
  })

  colors.setTheme({
    colourURL: ['black', 'bgCyan'],
    colour200: 'green',
    colour404: 'red'
  })

  function checkStatus (url, originalURL) {
    return got(url)
      .then(res => {
        // console.log(`Checking ${url}`.colourURL)
        // if (res.statusCode === 200) {
        //   const status = `200 ${url}`.colour200
        //   console.log(status)
        // }
      })
      .catch(() => {
        if (originalURL) {
          console.log(`
            404 on page:
            ${originalURL}
            ${url.colour404}`
          )
        } else {
          console.log(`404 ${url}`.colour404)
        }
      })
  }

  function checkLinksIn (url, element) {
    return got(url)
      .then(res => {
        if (element !== 'main') {
          console.log(`Checking links in: ${element}`.colourURL)
        }
        const $ = cheerio.load(res.body)
        $(element).find('a').each(function () {
          const href = $(this).attr('href')
          if (href.charAt(0) !== '#' || href.match(/^(.pdf)/)) {
            let hrefURL
            if (href.match(/(http)/)) {
              hrefURL = href
            } else if (href.charAt(0) === '/') {
              hrefURL = `${prefix}${href}`
            } else {
              hrefURL = `${prefix}/${href}`
            }
            return checkStatus(hrefURL, url)
          }
        })
        if (element !== 'main') {
          console.log(`Finished ${element}`.colour200)
        }
      })
  }

  gulp.task('404', function (done) {
    const appLinks = [
      checkLinksIn(prefix, 'header'),
      checkLinksIn(prefix, '.app-navigation'),
      checkLinksIn(prefix, 'footer')
    ]
    const pageLinks = []
    urls.forEach(url => {
      pageLinks.push(checkStatus(url))
      pageLinks.push(checkLinksIn(url, 'main'))
    })
    return Promise.all(appLinks)
      .then(() => {
        console.log('Checking page links'.colourURL)
        return Promise.all(pageLinks)
      })
      .then(done())
  })
}
