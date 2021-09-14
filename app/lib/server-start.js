const http = require('http')
const serverPort = require('./server-port')
const serverErrorHandler = require('./server-port')

const port = serverPort(process.env.PORT)

module.exports = function serverStart (app) {
  const server = http.createServer(app)
  serverErrorHandler(server)
  server.listen(port)
  console.log(`Listening on http://localhost:${port}`)
  return server
}
