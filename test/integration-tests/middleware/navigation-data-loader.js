const { navigationDataLoader } = require('../../../app/middleware/navigation-data-loader')
const { expect } = require('chai')

describe('navigationDataLoader', async () => {
  it('should load in the navigation menu data', () => {
    const req = {}
    const next = () => {}
    const res = { locals: {} }
    navigationDataLoader(req, res, next)
    expect(res.locals.navItems).to.not.be.equal(undefined)
  })
})
