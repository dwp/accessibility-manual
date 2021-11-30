const express = require('express')
const router = express.Router()
const { navigationDataLoader } = require('../middleware/navigation-data-loader')

router.use(navigationDataLoader)

router.get(/\.html?$/i, function (req, res) {
  let path = req.path
  const parts = path.split('.')
  parts.pop()
  path = parts.join('.')
  res.redirect(path)
})

router.get(/^\/([^.]+)$/, function (req, res) {
  const path = (req.params[0])

  res.render(path, function (err, html) {
    if (err) {
      res.render(path + '/index', function (err2, html) {
        if (err2) {
          res.render('error.njk', function (err3, html) {
            if (process.env.NODE_ENV !== 'test') console.log(err2)
            if (err3) {
              res.status(404).send('Page not found')
            } else {
              res.end(html)
            }
          })
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
