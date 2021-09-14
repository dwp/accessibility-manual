const forcehttps = require('../../../app/middleware/force-https')

const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies')
chai.use(spies)
const sandbox = chai.spy.sandbox()

describe('force-https', async () => {
  it('should not redirect if https', () => {
    const next = () => {}
    const req = {
      headers: { host: 'accessibility-manual.dwp.gov.uk', 'x-forwarded-proto': 'https' },
      connection: { proxySecure: false },
      get: (host) => 'accessibility-manual.dwp.gov.uk'
    }
    const res = { redirect: () => true }
    forcehttps(req, res, next)
    expect(req.connection.proxySecure).to.equal(true)
  })

  it('should redirect if http', () => {
    const next = () => {}
    const req = {
      headers: { host: 'accessibility-manual.dwp.gov.uk', 'x-forwarded-proto': 'http' },
      connection: { proxySecure: false },
      get: (host) => 'accessibility-manual.dwp.gov.uk'
    }
    const res = { redirect: () => true }
    const redirected = forcehttps(req, res, next)
    expect(redirected).to.equal(true)
  })

  it('should redirect if .com', () => {
    const next = () => {}
    const req = {
      headers: { host: 'accessibility-manual.com', 'x-forwarded-proto': 'https' },
      connection: { proxySecure: false },
      get: (host) => 'accessibility-manual.com'
    }
    const res = { redirect: () => true }
    const redirected = forcehttps(req, res, next)
    expect(redirected).to.equal(true)
  })
})

describe('force-https in production', async () => {
  before(() => {
    process.env.NODE_ENV = 'production'
    sandbox.on(console, ['log'])
  })

  it('should console log when https redirect occurs', () => {
    const next = () => {}
    const req = {
      headers: { host: 'accessibility-manual.dwp.gov.uk', 'x-forwarded-proto': 'http' },
      connection: { proxySecure: false },
      get: (host) => 'accessibility-manual.dwp.gov.uk'
    }
    const res = { redirect: () => true }
    forcehttps(req, res, next)
    expect(console.log).to.have.been.called()
  })

  it('should console log when .com redirect occurs', () => {
    const next = () => {}
    const req = {
      headers: { host: 'localhost.com', 'x-forwarded-proto': 'http' },
      connection: { proxySecure: false },
      get: (host) => 'localhost.com'
    }
    const res = { redirect: () => true }
    forcehttps(req, res, next)
    expect(console.log).to.have.been.called()
  })

  after(() => {
    process.env.NODE_ENV = 'test'
    sandbox.restore()
  })
})
