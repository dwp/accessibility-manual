const env = (process.env.NODE_ENV)

if (env !== 'production') {
  const gulp = require('gulp')
  const axepackage = require('gulp-axe-webdriver')

  // Build URLS from JSON
  const { navItems } = require('../app/views/_globals/navigation-data.json')
  const prefix = `http://localhost:${process.env.AXEPORT || 3000}`
  const urls = []
  navItems.forEach(function (navObject) {
    urls.push(`${prefix}${navObject.link}`)
    navObject.subsections.forEach(function (section) {
      section.subsections.forEach(function (subNav) {
        urls.push(`${prefix}${subNav.link}`)
      })
    })
  })

  gulp.task('axe', function () {
    var options = {
      saveOutputIn: 'axe-report.json',
      headless: false,
      showOnlyViolations: true,
      urls
    }
    return axepackage(options)
  })
}
