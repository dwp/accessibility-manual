const env = (process.env.NODE_ENV)

if (env !== 'production') {
  const gulp = require('gulp')
  const axepackage = require('gulp-axe-webdriver')

  // Build URLS from JSON
  const { navItems } = require('../app/views/_globals/navigation-data.json')
  const urls = []
  const prefix = `http://localhost:${process.env.AXEPORT || 3000}`
  for (let i = 0; i < navItems.length; i++) {
    urls.push(prefix + navItems[i].link)
    if (navItems[i].subsections) {
      for (let i2 = 0; i2 < navItems[i].subsections.length; i2++) {
        urls.push(prefix + navItems[i].subsections[i2].link)
      }
    }
  }

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
