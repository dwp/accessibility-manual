const express = require('express')
const router = express.Router()

// Local Variables
const env = (process.env.NODE_ENV)
const useAuth = true
const username = process.env.USERNAME
const password = process.env.PASSWORD

router.use(function (req, res, next) {
  const basicAuth = require('basic-auth')

  if (env === 'production' && useAuth === true) {
    if (!username || !password) {
      console.error('Username or password is not set.')
      return res.send('<h1>Error:</h1><p>Username or password not set. <a href="https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku#6-set-a-username-and-password">See guidance for setting these</a>.</p>')
    }

    const user = basicAuth(req)

    if (!user || user.name !== username || user.pass !== password) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
      return res.sendStatus(401)
    }
  }
  next()
})

router.use('/axe-url-generator', function (req, res, next) {
  if (env === 'production') {
    return res.status(404).send('Page not found')
  }
  const port = process.env.PORT || 3000
  res.locals.port = port
  next()
})

router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router
