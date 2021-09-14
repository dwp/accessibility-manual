const serverPort = require('../../../app/lib/server-port')
const { expect } = require('chai')

describe('serverPort', () => {
  it('should run a specified port', () => {
    const port = '8080'
    const result = serverPort(port)
    expect(result).to.equal('8080')
  })

  it('should default to 3000 with no specified port', () => {
    const port = undefined
    const result = serverPort(port)
    expect(result).to.equal('3000')
  })
})
