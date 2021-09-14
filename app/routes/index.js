const express = require('express')
const router = express.Router()
const { navigationDataLoader } = require('../middleware/navigation-data-loader')

router.use(navigationDataLoader)

router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router
