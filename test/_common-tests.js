const cheerio = require('cheerio')
const axepackage = require('gulp-axe-webdriver')
const { buildPageFromURL, buildPageLinks } = require('./_helpers')

function loadThePage (url) {
  return buildPageFromURL(url)
    .then(page => {
      return page
    })
    .catch(err => {
      throw err
    })
}

function checkTheH1 (page) {
  return new Promise((resolve, reject) => {
    const $ = cheerio.load(page.body)
    const $h1 = $('h1')
    if ($h1.length === 1) {
      return resolve(1)
    } else if ($h1.length > 1) {
      return reject(Error('Too many H1s on page'))
    } else {
      return reject(Error('No H1 on page'))
    }
  })
}

function checkBrokenLinks (page) {
  page.links = buildPageLinks(page)
  return Promise.all(page.links)
}

function checkAccessibility (url) {
  var options = {
    headless: true,
    showOnlyViolations: true,
    errorOnViolation: true,
    urls: [url]
  }
  return axepackage(options)
}

module.exports = {
  loadThePage,
  checkBrokenLinks,
  checkTheH1,
  checkAccessibility
}
