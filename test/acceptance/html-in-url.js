const chai = require('chai')
const buildChrome = require('./helpers/build-chrome')

const expect = require('chai').expect
chai.use(require('chai-string'))

const localhost = `http://localhost:${process.env.PORT || 3000}`
const section = ''
const page = '/sitemap.html'
const testURL = `${localhost}${section}${page}`

describe('.html in url', async () => {
  let driver

  describe('Page content', async () => {
    before(async () => {
      driver = buildChrome()
      await driver.get(testURL)
    })

    it('should have a H1 but not more than 1', async () => {
      const url = await driver.getCurrentUrl()
      const expectedResult = 'http://localhost:8080/sitemap'
      expect(url).to.equal(expectedResult)
    })

    after(async () => {
      await driver.quit()
    })
  })
})
