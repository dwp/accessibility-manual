require('../server') // Load up the server on PORT 8080
const { getNavURLs } = require('./helpers/_helpers')
const { Builder } = require('selenium-webdriver')
const common = require('./helpers/_common-tests')
const testURL = `http://localhost:${process.env.PORT || 3000}`

// Get all navigation URLS
const urls = getNavURLs(testURL)
// Add footer links to the tests
urls.push({ title: 'Accessibility statement', url: `${testURL}/accessibility-statement` })
urls.push({ title: 'Sitemap', url: `${testURL}/sitemap` })
urls.push({ title: 'Privacy policy', url: `${testURL}/privacy-policy` })

describe('Test application', async () => {
  // Create global driver (Chrome browser)
  let driver

  before(async () => {
    // Before running the tests run the Chrome browser
    driver = await new Builder().forBrowser('chrome').build()
  })

  // For each of the URLs from the Nav Menu
  urls.forEach(pageInfo => {
    // Describe the page being tested
    describe(pageInfo.title, async () => {
      // Before running the tests navigate the browser to the right url
      before(async () => {
        await driver.get(pageInfo.url)
      })

      it('should have a h1 (but not more than one)', async () => {
        await common.checkH1(driver)
      })

      it('should have content on the page', async () => {
        await common.checkForPageContent(driver)
      })

      it('should have no broken links', async () => {
        await common.checkBrokenLinks(driver)
      })

      it('should have no accessibility errors', async () => {
        await common.checkAccessibility(driver)
      })
    })
  })

  // Close the browser when finished
  after(() => {
    driver.quit()
  })
})
