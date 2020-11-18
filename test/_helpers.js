const got = require('got')
const cheerio = require('cheerio')
const prefix = `http://localhost:${process.env.PORT || 3000}`

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
        hrefURL = `${prefix}${href}`
      } else {
        // If the url is a relative path starting without a slash build correct url
        hrefURL = `${prefix}/${href}`
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
  const page = {
    url,
    links: new Set()
  }

  return got(url)
    .then(res => {
      page.body += res.body
      if (res.statusCode === 200) {
        page.statusCode = 200
      } else {
        page.statusCode = 'Error'
      }
      return page
    })
}

module.exports = {
  prefix,
  checkURL,
  buildPageFromURL,
  buildPageLinks
}
