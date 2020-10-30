const env = (process.env.NODE_ENV)

if (env !== 'production') {
  const gulp = require('gulp')
  const axepackage = require('gulp-axe-webdriver')

  gulp.task('axe', function () {
    var options = {
      saveOutputIn: 'axe-report.json',
      headless: false,
      showOnlyViolations: true,
      urls:
      [
        'http://localhost:3000/accessibility-law',
        'http://localhost:3000/accessibility-law/the-public-sector-bodies-accessibility-regulations-2018',
        'http://localhost:3000/accessibility-law/en301549-accessibility-requirements-for-ict',
        'http://localhost:3000/accessibility-law/accessibility-regulations-vs-the-govuk-service-standard',
        'http://localhost:3000/accessibility-law/accessibility-statements',
        'http://localhost:3000/accessibility-law/disproportionate-burden',
        'http://localhost:3000/accessibility-law/internal-vs-public-facing-services',
        'http://localhost:3000/accessibility-law/web-content-accessibility-guidelines',
        'http://localhost:3000/guidance-for-your-job-role',
        'http://localhost:3000/guidance-for-your-job-role/business-analyst',
        'http://localhost:3000/guidance-for-your-job-role/content-designer',
        'http://localhost:3000/guidance-for-your-job-role/delivery-manager',
        'http://localhost:3000/guidance-for-your-job-role/digital-performance-analyst',
        'http://localhost:3000/guidance-for-your-job-role/interaction-designer',
        'http://localhost:3000/guidance-for-your-job-role/product-manager',
        'http://localhost:3000/guidance-for-your-job-role/qa-tester',
        'http://localhost:3000/guidance-for-your-job-role/software-engineer-or-front-end-developer',
        'http://localhost:3000/guidance-for-your-job-role/user-researcher',
        'http://localhost:3000/best-practice',
        'http://localhost:3000/tools-and-resources',
        'http://localhost:3000/tools-and-resources/automated-accessibility-testing',
        'http://localhost:3000/community'
      ]
    }
    return axepackage(options)
  })
}
