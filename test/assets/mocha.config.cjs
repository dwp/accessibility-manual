exports.mochaGlobalSetup = async function () {
  require('../../server') // Load up the server on PORT 8080
}

exports.mochaHooks = {}
