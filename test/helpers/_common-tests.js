const got = require('got')
const { expect } = require('chai')
const { asyncForEach } = require('./_helpers')
const AxeBuilder = require('@axe-core/webdriverjs')
const { By } = require('selenium-webdriver')

// Function to check all broken links
async function checkBrokenLinks (driver) {
  // Find all the anchor tags on the page
  const linkElements = await driver.findElements(By.css('a'))
  // Run this function on each link
  await asyncForEach(linkElements, async function (linkElements) {
    // Get the href and the link text
    const url = await linkElements.getAttribute('href')
    const linkText = await linkElements.getText()
    try {
      // Attempt to ping the url and log the status code which comes back
      const response = await got(url)
      const status = response.statusCode
      // The status code should be a 200 response if the link is not broken
      expect(status).to.eql(200)
    } catch {
      // If there is no response or it's not a 200 log the error
      throw (Error(`
        link text: ${linkText}
        url: ${url}
        is broken
      `))
    }
  })
}
async function checkH1 (driver) {
  // Find all the elements which are H1's
  const h1Element = await driver.findElements(By.css('h1'))
  const numberOfH1s = h1Element.length
  // Expect there to be exactly 1 on the page
  expect(numberOfH1s).to.eql(1)
}

async function checkForPageContent (driver) {
  // Find P tags and UL tags (not a fool proof way of finding content)
  const p = await driver.findElements(By.css('main p'))
  const ul = await driver.findElements(By.css('main ul'))
  const numberOfPs = p.length
  const numberOfUls = ul.length
  // If there are P tags present pass the test
  if (numberOfPs > 0) {
    expect(numberOfPs).to.be.greaterThan(0)
  } else {
    // If there are no P tags, but there are UL tags pass the test
    expect(numberOfUls).to.be.greaterThan(0)
  }
}

async function checkAccessibility (driver) {
  // Assign the browser for AxeCore to run
  const a11y = await new AxeBuilder(driver)
  // Analyse the page
  const results = await a11y.analyze()
  // If there are violations (not warnings)
  if (results.violations) {
    // For each of the violations
    results.violations.forEach(violation => {
      violation.nodes.forEach(node => {
        // Log the description, the element causing it and the impact
        throw (Error(`
          ${violation.description}
          ${node.html}
          impact: ${node.impact}
        `))
      })
    })
  }
}
module.exports = {
  checkH1,
  checkForPageContent,
  checkBrokenLinks,
  checkAccessibility
}
