const { expect } = require('chai')
const buildChrome = require('./helpers/build-chrome')

const localhost = `http://localhost:${process.env.PORT || 3000}`
const section = '/best-practice'
const page = '/automated-accessibility-testing'
const testURL = `${localhost}${section}${page}`
const redirectURL = `${localhost}/best-practice/how-to-do-accessibility-testing/#automated-testing`

describe(`301 Redirect: ${testURL}`, async () => {
  let driver

  before(async () => {
    driver = buildChrome()
    await driver.get(testURL)
  })

  it(`should redirect to ${redirectURL}`, async () => {
    const url = await driver.getCurrentUrl()
    expect(url).to.equal(redirectURL)
  })

  after(async () => {
    await driver.quit()
  })
})
