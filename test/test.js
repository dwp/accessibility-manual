const { expect } = require('chai')
const { prefix } = require('./_helpers')

const app = require('../server')

const {
  loadThePage,
  checkBrokenLinks,
  checkTheH1,
  checkAccessibility
} = require('./_common-tests')

// Build URLS from JSON
const { navItems } = require('../app/views/_globals/navigation-data.json')
const urls = []
urls.push({
  title: 'Home page',
  url: prefix
})
navItems.forEach(function (navObject) {
  urls.push({
    title: navObject.title,
    url: `${prefix}${navObject.link}`
  })
})

describe('Test application', function (done) {
  let server = null

  before(function (done) {
    server = app.listen(done)
  })

  urls.forEach(pageTest => {
    // Output which page is being checked
    describe(pageTest.title, function () {
      // Create full path URL
      const url = `${pageTest.url}`
      // Create a blank
      let page

      it('should load the page', function () {
        return loadThePage(url)
          .then(pageInfo => {
            page = pageInfo
            expect(pageInfo.statusCode).to.eql(200)
          })
      })

      it('should have a single H1', function () {
        return checkTheH1(page)
          .then(numberOfH1s => {
            expect(numberOfH1s).to.eql(1)
          })
          .catch(err => {
            throw err
          })
      })

      it('should have no broken links on the page', function () {
        return checkBrokenLinks(page)
          .then((links) => {
            links.forEach(result => {
              expect(result.statusCode).to.eql(200)
            })
          })
          .catch(err => {
            throw err
          })
      })

      it('should have no accessibility errors', function () {
        return checkAccessibility(url)
          .catch(() => {
            throw Error('Accessibility fails')
          })
      })
    })
  })
})
