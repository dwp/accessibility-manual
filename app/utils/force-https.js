function forcehttps (req, res, next) {
  const host = req.get('Host')
  let protocol = req.headers['x-forwarded-proto']

  // if the host contains .com then redirect to the new url
  if (host.match(/(.com)/)) {
    console.log('Redirecting request to dwp domain')
    // 301 permanent
    return res.redirect(301, 'https://accessibility-manual.dwp.gov.uk' + req.url)
  }

  // Glitch returns a comma separated list for x-forwarded-proto
  // We need the first to determine if running on https
  if (protocol) {
    protocol = protocol.split(',').shift()
  }

  if (protocol !== 'https') {
    console.log('Redirecting request to https')
    // 301 permanent
    return res.redirect(301, 'https://' + host + req.url)
  }

  // Mark proxy as secure (allows secure cookies)
  req.connection.proxySecure = true
  next()
}
module.exports = forcehttps
