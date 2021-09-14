function checkForDotCom (host) {
  if (host.match(/(.com)/)) return true
  return false
}

module.exports = checkForDotCom
