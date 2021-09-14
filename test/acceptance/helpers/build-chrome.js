const { Builder } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

function buildChrome () {
  return new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build()
}

module.exports = buildChrome
