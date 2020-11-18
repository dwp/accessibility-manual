const cheerio = require('cheerio')
const axepackage = require('gulp-axe-webdriver')
const helpers = require('./_helpers')

function loadThePage (url) {
  // Build function does a HTTP req on the URL and creates a page object from the response
  return helpers.buildPageFromURL(url)
    .then(page => {
      // Returns page object
      return page
    })
    .catch(err => {
      // Throws error if page could not be built
      throw err
    })
}

function checkTheH1 (page) {
  // Returns a new promise
  return new Promise((resolve, reject) => {
    // Creates a fake DOM using the HTML from the page body
    const $ = cheerio.load(page.body)
    // Gets any H1 elements
    const $h1 = $('h1')
    // Checks if it found 1 H1
    if ($h1.length === 1) {
      // Resolves the promise to say it found 1 H1
      return resolve(1)
    // If it found more than 1 H1
    } else if ($h1.length > 1) {
      // Rejects with a new error
      return reject(Error('Too many H1s on page'))
    // If it found 0 H1's
    } else {
      // Rejects with a new error
      return reject(Error('No H1 on page'))
    }
  })
}

function checkBrokenLinks (page) {
  // Adds a new set to the page attributes from the builtPageLinks function
  // The set will be a promise chain once the links have been built
  page.links = helpers.buildPageLinks(page)
  // Runs the promise chain
  return Promise.all(page.links)
}

function checkAccessibility (url) {
  // Sets the AxeCore options
  var options = {
    headless: true,
    showOnlyViolations: true,
    errorOnViolation: true,
    urls: [url]
  }
  // Runs AxeCore on the URL
  return axepackage(options)
}

module.exports = {
  loadThePage,
  checkBrokenLinks,
  checkTheH1,
  checkAccessibility
}
