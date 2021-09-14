const checkForDotCom = require('../../../app/utils/check-for-dot-com')
const { expect } = require('chai')

describe('checkForDotCom(host)', async () => {
  it('should return true if .com', async () => {
    const host = 'accessibilitymanual.com'
    const result = checkForDotCom(host)
    expect(result).to.equal(true)
  })

  it('should return false if not .com', async () => {
    const host = 'accessibility-manual.dwp.gov.uk'
    const result = checkForDotCom(host)
    expect(result).to.equal(false)
  })
})
