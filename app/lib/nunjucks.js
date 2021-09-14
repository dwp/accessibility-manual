const nunjucks = require('nunjucks')
const markdown = require('./markdown')
const path = require('path')

function setup (app) {
  app.set('view engine', 'njk')

  const paths = [
    path.join(__dirname, '../../node_modules/govuk-frontend/govuk/'),
    path.join(__dirname, '../../node_modules/govuk-frontend/govuk/components'),
    path.join(__dirname, '../../app/views'),
    path.join(__dirname, '../../app/views/components'),
    path.join(__dirname, '../../app/views/_layouts')
  ]

  const nunjucksEnvironment = nunjucks.configure(paths, {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
  })

  nunjucksEnvironment.addFilter('markdown', markdown.compile)

  return app
}

module.exports = { setup }
