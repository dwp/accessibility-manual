const runAllCommonTests = require('./common-tests/all-common-tests')

const localhost = `http://localhost:${process.env.PORT || 3000}`
const section = ''
const page = '/potato'
const testURL = `${localhost}${section}${page}`

describe('404 Error', async () => {
  runAllCommonTests(testURL)
})
