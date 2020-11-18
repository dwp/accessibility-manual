const { getNavURLs } = require('../helpers/_helpers')
const common = require('../helpers/_common-tests')
const { expect } = require('chai')

const urls = getNavURLs()

urls.forEach(pageTest => {
  // Output which page is being checked
  describe(pageTest.title, function () {
    // Create full path URL
    const url = `${pageTest.url}`
    // Create a blank page variable
    let page

    it('should load the page', function () {
      return common.loadThePage(url)
        .then(pageInfo => {
          // Assign the values to the page variable for next tests
          page = pageInfo
          // Expect the status code of the http req to be 200
          expect(pageInfo.statusCode).to.eql(200)
        })
    })

    it('should have a single H1', function () {
      // Feed the page variable into the test
      return common.checkTheH1(page)
        .then(numberOfH1s => {
          // Expect the number of H1's to be 1
          expect(numberOfH1s).to.eql(1)
        })
        .catch(err => {
          // If the test does not pass throw an error
          throw err
        })
    })

    it('should have no broken links on the page', function () {
      // Feed the page variable into the test
      return common.checkBrokenLinks(page)
        .then((links) => {
          // Check the HTTP responses of each link
          links.forEach(result => {
            // Expect the status to be 200
            expect(result.statusCode).to.eql(200)
          })
        })
        .catch(err => {
          // If the test does not pass throw an error
          throw err
        })
    })

    it('should have no accessibility errors', function () {
      // Feed the current URL into the test
      return common.checkAccessibility(url)
        .catch(() => {
          // AxeCore will only throw an error if it finds any WCAG voilations
          throw Error('Accessibility fails')
        })
    })
  })
})
