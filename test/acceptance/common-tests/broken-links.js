const got = require('got')
const buildChrome = require('../helpers/build-chrome')
const { expect } = require('chai')
const { By } = require('selenium-webdriver')

module.exports = function (url) {
  let driver

  describe('Broken links', async () => {
    before(async () => {
      driver = buildChrome()
      await driver.get(url)
    })

    it('should have no links with 404 errors', async () => {
      const brokenLinks = await checkBrokenLinks(driver)
      expect(brokenLinks.length).to.equal(0)
    })

    after(async () => {
      await driver.quit()
    })
  })
}

async function asyncForEach (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    await cb(arr[i], i, arr)
  }
}

async function checkBrokenLinks (driver) {
  const linkElements = await driver.findElements(By.css('a'))
  const brokenLinks = []
  await asyncForEach(linkElements, async function (linkElements) {
    const url = await linkElements.getAttribute('href')
    const linkText = await linkElements.getText()
    try {
      await got(url)
    } catch {
      brokenLinks.push(`
        link text: ${linkText}
        url: ${url}
        is broken
      `)
    }
  })
  return new Promise((resolve, reject) => {
    if (brokenLinks.length > 0) reject(new Error(brokenLinks))
    resolve(brokenLinks)
  })
}
