const buildChrome = require('../helpers/build-chrome')
const checkA11yViolations = require('../helpers/check-a11y-violations')

const { expect } = require('chai')

module.exports = function (url) {
  describe('Accessibility', async () => {
    let driver

    before(async () => {
      driver = buildChrome()
      await driver.get(url)
    })

    it('should have no axe-core errors', async () => {
      const violations = await checkA11yViolations(driver)
      expect(violations.length).to.equal(0)
    })

    after(async () => {
      await driver.quit()
    })
  })
}
