# How to do accessibility testing

To accessibility test your service, you need to do 4 things:
1. Validate your HTML
2. Run automated tools
3. Do manual testing
4. Do assistive technology testing

Doing all 4 steps in the correct order is the most efficient way to do accessibility testing. 

Fixing accessibility issues often means rewriting the HTML. Whenever you add or change your user interface you need to start the testing process again to make sure you haven't broken anything. Doing it in the wrong order will create more work and take more time.

## Automated testing
### Validating your HTML
Accessibility relies on your HTML being correct. Before running any accessibility tools, you should validate the HTML and fix any errors.

You should validate your HTML as soon as you have finished building a page. Running it on your local machine can save you time by allowing you to fix issues before you write git commits or push code. 

We've published examples on:
- [how to validate HTML using HTML Validator](/best-practice/validating-html/#html-validator).
- [how to validate HTML using W3C Markup Validation Service](/best-practice/validating-html/#w3c-markup-validation-service).

### Automated testing using browser plugins
After your HTML is valid, you should run automated tools in the browser. 

Automated tools are a quick and simple way to catch obvious accessibility barriers but the they will not find everything. The best tools, on their own, only find around 40% of known issues so you can't rely on them. You can read the [GDS accessibility tools audit](https://alphagov.github.io/accessibility-tool-audit/) to see how some common tools performed.

Each accessibility browser plugin will find slightly different things, so we use 3. They are quick, each one only takes a few seconds.

We recommend the following browser plugins to test your service:
- [Arc Toolkit](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce?utm_source=chrome-ntp-icon)
- [Axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Wave](https://wave.webaim.org/extension/)

With these 3 tools combined, you can expect to find up-to 50% of common accessibility barriers. You should make sure your HTML is valid and you have no reported errors using the browser plugins before moving onto manual testing. 

If an automated tool is showing an issue against a GOV.UK component or pattern you should [raise an issue with the GOV.UK Design System team](https://github.com/alphagov/govuk-design-system/issues). If you have used the component to it's specifications, you should not just hack it locally to silence the tool. If you hack it, you create inconsistencies between your service and the rest of GOV.UK. You can generally consider it a false positive unless GDS release an update to address it.

We have published examples on:
- [how to use the ARC Toolkit extension](/best-practice/automated-testing-using-browser-plugins/#arc-toolkit)
- [how to use the Axe DevTools extension](/best-practice/automated-testing-using-browser-plugins/#axe-devtools)
- [how to use the Wave extension](/best-practice/automated-testing-using-browser-plugins/#wave)

### Automated testing in your acceptance tests
You should build automated accessibility testing into your acceptance tests. This will help to stop pushing bad code if things get missed.

It is good practice to use your continuous integration (CI) pipeline to run the accessibility tests when you commit code and tag releases. You can run axe-core with Selenium or you can run it using PA11Y which is built into GitLab.

We've published examples on:
- [how to use axe-core and PA11Y to test a single page](/best-practice/automated-testing-using-axe-core-and-pa11y#single-page-tests-using-axe-core-and-pa11y)
- [how to use axe-core and PA11Y as part of your acceptance tests](/best-practice/automated-testing-using-axe-core-and-pa11y/#acceptance-tests-using-axe-core-and-pa11y)
- [how to use axe-core and Selenium as part of your acceptance tests](/best-practice/automated-testing-using-axe-core-and-pa11y/#acceptance-tests-using-axe-core-and-selenium)

## Manual testing
You must do manual accessibility testing and assistive technology testing. You also need to retain your results as evidence.

We recommend the Accessibility Insights assessment tool.

We have published examples on:
- [how to use the accessibility insights assessment tool](/best-practice/manual-testing-using-tools/#accessibility-insights-assessment-extension)

## Assistive technology testing
WCAG 2.1 states that in order to be compliant, a website must work with a range of user agents, including assistive technologies. A user agent is anything a person is using to navigate your website, such as a browser and a screen reader.

The 3 main types of assistive technology are:
- Screen reading software
- Voice recognition software
- Screen magnification software

For compliance, as a minimum, you should test your service with at least 1 of each of the 3 main types. However, to make sure your website is as accessible as possible, you should follow the [GOV.UK Service Standard's recommendations for assistive technology combinations](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies).

You also need to retain your results as evidence.

We have published examples on the following screen readers:
- [how to test using Voiceover on OS X](/best-practice/screen-reader-testing/#voiceover-on-os-x)
<!-- - [how to test using JAWS on Windows](/best-practice/screen-reader-testing/#jaws-on-windows) -->
- [how to test using NVDA on Windows](/best-practice/screen-reader-testing/#nvda-on-windows)

We have published examples on the following voice controllers:
- [how to test using Voice Control on OS X](/best-practice/voice-controller-testing/#voice-control-on-os-x)
<!-- - [how to test using Dragon on Windows](/best-practice/voice-controller-testing/#dragon-on-windows) -->

We have published examples on the following screen magnifiers:
- [how to test using Zoom on OS X](/best-practice/screen-magnifier-testing/#zoom-on-os-x)
<!-- - [how to test using ZoomText on Windows](/best-practice/screen-magnifier-testing/#zoomtext-on-windows) -->

