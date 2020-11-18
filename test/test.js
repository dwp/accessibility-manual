const app = require('../server')

describe('Test application', function (done) {
  // Start the server to run tests against
  // Port is set to 8080 in the package.json to avoid conflicts
  before(function (done) {
    app.listen(done)
  })

  // Run common tests against each page
  // Checks: Page load, H1s, broken links, accessibility
  require('./tests/common')
})
