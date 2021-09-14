module.exports = function (port) {
  if (typeof port === 'undefined') return '3000'
  return process.env.PORT
}
