const useHttpsInProd = require('../../../app/lib/use-https-in-production')
const forcehttps = require('../../../app/middleware/force-https')

const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies)
const expect = chai.expect
const sandbox = chai.spy.sandbox()

const express = require('express')
const app = express()

describe('useHttpsInProd', async () => {
  before(() => {
    process.env.NODE_ENV = 'production'
    sandbox.on(app, ['set', 'use'])
  })

  it('should set trust proxy to 1 if in production', async () => {
    useHttpsInProd(app)
    expect(app.set).to.have.been.called.with('trust proxy', 1)
  })

  it('should set use forcehttps', async () => {
    useHttpsInProd(app)
    expect(app.use).to.have.been.called.with(forcehttps)
  })

  after(() => {
    process.env.NODE_ENV = 'test'
    sandbox.restore()
  })
})
