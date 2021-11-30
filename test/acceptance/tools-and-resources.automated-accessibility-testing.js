const runAllCommonTests = require('./common-tests/all-common-tests')

const localhost = `http://localhost:${process.env.PORT || 3000}`
const section = '/tools-and-resources'
const page = '/automated-accessibility-testing'
const testURL = `${localhost}${section}${page}`

describe(`${section}${page}`, async () => {
  runAllCommonTests(testURL)
})