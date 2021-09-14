// Core dependencies
const path = require('path')
const express = require('express')

// Application
const app = express()

// Force https in production
const useHttpsInProd = require('./app/lib/use-https-in-production')
useHttpsInProd(app)

// Configure markdown
const markdown = require('./app/lib/markdown')
markdown.setup()

// Configure nunjucks
const nunjucks = require('./app/lib/nunjucks')
nunjucks.setup(app)

// Routing
const redirects = require('./app/routes/redirects')
const routes = require('./app/routes/index')
const autoRoutes = require('./app/routes/auto')

// Middleware to serve static assets
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/evaluations', express.static(path.join(__dirname, '/evaluations')))
app.use('/assets', express.static(path.join(__dirname, 'node_modules', 'govuk-frontend', 'govuk', 'assets')))
app.use('/node_modules/govuk-frontend', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk')))

// Use routes
app.use(redirects)
app.use(routes)
app.use(autoRoutes)

// Start server
const serverStart = require('./app/lib/server-start')
serverStart(app)

module.exports = app
