const AxeBuilder = require('@axe-core/webdriverjs')

async function checkA11yViolations (driver) {
  const a11y = await new AxeBuilder(driver)
  const results = await a11y.analyze()
  const errors = []
  return new Promise((resolve, reject) => {
    if (results.violations) {
      results.violations.forEach(violation => {
        violation.nodes.forEach(node => {
          errors.push(`
            ${violation.description}
            ${node.html}
            impact: ${node.impact}
          `)
        })
        reject(new Error(errors))
      })
    }
    resolve(results.violations)
  })
}

module.exports = checkA11yViolations
