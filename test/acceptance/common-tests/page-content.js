const chai = require('chai')
const buildChrome = require('../helpers/build-chrome')
const { By } = require('selenium-webdriver')

const expect = require('chai').expect
chai.use(require('chai-string'))

module.exports = function (url) {
  let driver

  describe('Page content', async () => {
    before(async () => {
      driver = buildChrome()
      await driver.get(url)
    })

    it('should have a H1 but not more than 1', async () => {
      const numberOfH1s = await checkForSingleH1(driver)
      expect(numberOfH1s).to.equal(1)
    })

    it('should have a page title in the format: "H1 - DWP Accessibility Manual"', async () => {
      const h1Element = await driver.findElement(By.css('h1'))
      const h1Text = await h1Element.getText()
      let expectedResult
      if (url === `http://localhost:${process.env.PORT}/`) {
        expectedResult = 'Home - DWP Accessibility Manual'
      } else {
        expectedResult = `${h1Text} - DWP Accessibility Manual`
      }
      const title = await driver.getTitle()
      expect(title).to.equalIgnoreSpaces(expectedResult)
    })

    after(async () => {
      await driver.quit()
    })
  })
}

async function checkForSingleH1 (driver) {
  const h1Element = await driver.findElements(By.css('h1'))
  const numberOfH1s = h1Element.length
  return new Promise((resolve, reject) => {
    if (numberOfH1s === 1) resolve(numberOfH1s)
    if (numberOfH1s === 0) reject(new Error('Page should have a H1'))
    if (numberOfH1s > 1) reject(new Error('Page should only have 1 H1'))
  })
}
