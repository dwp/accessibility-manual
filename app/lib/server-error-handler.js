module.exports = function serverErrorHandler (server) {
  server.on('error', err => { throw err })
}
