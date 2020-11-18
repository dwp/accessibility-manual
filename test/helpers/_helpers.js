const got = require('got')
const cheerio = require('cheerio')
const { navItems } = require('../../app/views/_globals/navigation-data.json')

const testURL = `http://localhost:${process.env.PORT || 3000}`

function buildPageLinks (page) {
  // Create a new set ready to be populateds
  page.links = new Set()
  // Create fake DOM from page body
  const $ = cheerio.load(page.body)

  // Find each link in the DOM and create a URL to be tested
  $('html').find('a').each(function () {
    const href = $(this).attr('href')
    let hrefURL = ''
    // If the URL is a #jump-link ignore it
    if (!href.match(/(#)/)) {
      if (href.match(/(http)/)) {
        // If the url is already a full path return it unchanged
        hrefURL = href
      } else if (href.charAt(0) === '/') {
        // If the url is a relative path starting with a slash build correct url
        hrefURL = `${testURL}${href}`
      } else {
        // If the url is a relative path starting without a slash build correct url
        hrefURL = `${testURL}/${href}`
      }
    }
    if (hrefURL.length > 0) {
      // If the url is not empty, create a promise to check it is not a 404
      page.links.add(checkURL(hrefURL))
    }
  })
  // Return the promise chain
  return page.links
}

function checkURL (url) {
  // Create a new promise to handle errors
  return new Promise((resolve, reject) => {
    // HTTP request the URL
    return got(url)
      .then(res => {
        // If there is a response, return the response
        resolve(res)
      })
      .catch(err => {
        // If there is an error, return an error message with the URL
        reject(
          Error(`
            ${url}
            ${err}
          `)
        )
      })
  })
}

function buildPageFromURL (url) {
  // Starts a new page object
  const page = {
    url,
    links: new Set()
  }

  // Does a HTTP request on the URL
  return got(url)
    .then(res => {
      // Adds the response body to the page object
      page.body += res.body
      // Adds the status code to the page object
      page.statusCode = res.statusCode
      // Returns the page object
      return page
    })
}

function getNavURLs () {
  // Creates an set ready for Nav objects
  // Pushes the home page into the Nav as it's not in the navigation menu
  const urls = new Set([
    {
      title: 'Home page',
      url: testURL
    }
  ])
  console.log('here')

  // For each of the nav items in the navigation menu
  navItems.forEach(function (navObject) {
    // Pushes the URL and the title into the array ready for testing
    urls.add({
      title: navObject.title,
      url: `${testURL}${navObject.link}`
    })

    navObject.subsections.forEach(function (section) {
      section.subsections.forEach(function (subObject) {
        urls.add({
          title: subObject.title,
          url: `${testURL}${subObject.link}`
        })
      })
    })
  })
  // Returns an array of URL objects
  return urls
}

module.exports = {
  testURL,
  checkURL,
  buildPageFromURL,
  buildPageLinks,
  getNavURLs
}
