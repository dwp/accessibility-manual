const express = require('express')
const router = express.Router()
const { navigationDataLoader } = require('../utils/navigation-data-loader')

router.use(navigationDataLoader)

router.get(/\.html?$/i, function (req, res) {
  var path = req.path
  var parts = path.split('.')
  parts.pop()
  path = parts.join('.')
  res.redirect(path)
})

router.get(/^\/([^.]+)$/, function (req, res) {
  var path = (req.params[0])

  res.render(path, function (err, html) {
    if (err) {
      res.render(path + '/index', function (err2, html) {
        if (err2) {
          res.render('error.njk', function (err3, html) {
            if (err3) {
              res.status(404).send('Page not found');
            } else {
              res.end(html);
            }
          });
        } else {
          res.end(html)
        }
      })
    } else {
      res.end(html)
    }
  })
})

module.exports = router
