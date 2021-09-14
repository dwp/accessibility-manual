const runAllCommonTests = require('./common-tests/all-common-tests')

const localhost = `http://localhost:${process.env.PORT || 3000}`
const section = '/best-practice'
const page = '/automated-testing-using-browser-plugins'
const testURL = `${localhost}${section}${page}`

describe(`${section}${page}`, async () => {
  runAllCommonTests(testURL)
})
