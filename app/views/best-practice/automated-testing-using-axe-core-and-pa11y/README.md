# Automated testing using axe-core and PA11Y
Axe-core is an automated accessibility testing tool. It is the same engine which is used in the Axe DevTools Chrome extension. Axe-core needs a browser to work, which is why it's often paired with Selenium for acceptance tests. 

PA11Y is an automated testing tool which you can run from the command line or as part of your test suite. PA11Y uses [Puppeteer](https://developers.google.com/web/tools/puppeteer) to run its own headless Chrome browser. It uses [HTML Code Sniffer](https://squizlabs.github.io/HTML_CodeSniffer/) as its default runner, but it can also run axe-core at the same time if you tell it to.

Axe-core and PA11Y combined will find around 35% of accessibility issues.

## Single page tests using axe-core and PA11Y
Before you can install PA11Y you will need to [install NodeJS](https://nodejs.org/en/) to be able to use Node Package Manager (NPM).

To use PA11Y from the command line, first install it globally. Open up the Terminal app and use the following command:
```
npm install pa11y -g
```

You can then run it from the command line. Make sure you pass in both HTML Code Sniffer and axe-core as runners. If you don't pass in axe as a runner it will not use axe-core. Although HTML Code Sniffer is the default, once you pass in axe it overrides the default so you must tell it to use both.

```
pa11y --runner axe --runner htmlcs http://localhost:3000
```

Example output:
```
Results for URL: http://localhost:3000

 • Error: Links must have discernible text (https://dequeuniversity.com/rules/axe/4.3/link-name?application=axeAPI)
   ├── link-name
   ├── #main > p:nth-child(7) > a
   └── <a href=""></a>
```

## Acceptance tests using axe-core and PA11Y
PA11Y and axe-core can be easily integrated into acceptance tests. Because it uses it's own browser you can run it with little config. 

Again, make sure you pass in both HTML Code Sniffer and axe-core as runners. If you don’t pass in axe as a runner it will not use axe-core.

An example automated test using PA11Y and axe-core:
```javascript
~~const pa11y = require('pa11y')
~~
~~describe('Home page', async () => {
~~  it('should have no PA11Y issues', async () => {
~~    const results = await pa11y('http://localhost:3000', {
~~      runners: [
~~          'axe',
~~          'htmlcs'
~~      ]
~~    })
~~    expect(results.issues.length).to.equal(0)
~~  })
~~})
```

## Acceptance tests using axe-core and Selenium
Axe-core needs to be injected into a browser, so it is great if you are already running Selenium as part of your acceptance tests.

If you're not using Selenium, then it is probably easier to run axe-core with PA11Y as there is less configuration needed.

To run axe-core, pass your driver into the AxeBuilder and await the analysis.

Axe-core returns an object with 3 categories. Passed, incomplete and violations.

Passed is what the tool checked and found to be ok. Violations are what the tool found to be definite issues. Incomplete is when the tool could not reach a decision on whether it was ok or not.

To satisfy the test you should be looking for the number of violations to be 0. However you might want to log out any violations so you know what to fix. For issues in the incomplete category, the user must manually check them. So these are also worth console logging, but you would not want to fail your tests if you had any.

Axe-core uses the same engine as the Axe DevTools Chrome extension. So you can always re-run the tests using the highlight features of the extension to see exactly what the problem is if you get stuck.

An example automated test using Selenium, ChromeDriver and axe-core:
```javascript
~~const chrome = require('selenium-webdriver/chrome')
~~const chromedriver = require('chromedriver')
~~const AxeBuilder = require('@axe-core/webdriverjs')
~~const { Builder } = require('selenium-webdriver')
~~const { expect } = require('chai')
~~
~~chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
~~
~~describe('Home page', async () => {
~~  const driver = new Builder().forBrowser('chrome').build()
~~
~~  it('should have no axe-core voilations', async () => {
~~    await driver.get('http://localhost:3000')
~~    const a11y = await new AxeBuilder(driver)
~~    const results = await a11y.analyze()
~~    if (results.violations) {
~~      results.violations.forEach(violation => {
~~        violation.nodes.forEach(node => {
~~          console.log(`
~~            ${violation.description}
~~            ${node.html}
~~            impact: ${node.impact}
~~          `)
~~        })
~~      })
~~    }
~~    if (results.incomplete) {
~~      results.incomplete.forEach(incompleteTest => {
~~        incompleteTest.nodes.forEach(node => {
~~          console.log(`
~~            ${incompleteTest.description}
~~            ${node.html}
~~            impact: ${node.impact}
~~          `)
~~        })
~~      })
~~    }
~~    expect(results.violations.length).to.equal(0)
~~  })
~~
~~  after(async () => {
~~    await driver.quit()
~~  })
~~})
```