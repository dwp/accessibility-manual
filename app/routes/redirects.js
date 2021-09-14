const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0')
  }

  if (req.url === '/best-practice/automated-accessibility-testing') {
    res.set('location', '/best-practice/how-to-do-accessibility-testing/#automated-testing')
    return res.status(301).send()
  }

  if (req.url === '/best-practice/manual-accessibility-testing') {
    res.set('location', '/best-practice/how-to-do-accessibility-testing/#manual-testing')
    return res.status(301).send()
  }

  if (req.url === '/best-practice/assistive-technology-testing') {
    res.set('location', '/best-practice/how-to-do-accessibility-testing/#assistive-technology-testing')
    return res.status(301).send()
  }

  next()
})

module.exports = router
