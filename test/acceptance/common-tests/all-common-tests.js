module.exports = function runAllCommonTests (url) {
  const runAxeCore = require('./axe-core')
  runAxeCore(url)

  const checkPageContent = require('./page-content')
  checkPageContent(url)

  const checkBrokenLinks = require('./broken-links')
  checkBrokenLinks(url)
}
