# {Automated tools: }How to test

Automated tools cannot find every error or guarantee that your content is accessible for all users, but they are a good place to start.

## Valid HTML
Valid html code must:
- have complete start and end tags
- nest elements correctly
- use HTML5 elements to their specifications
- use unique ID attributes on elements
- not use duplicate attributes on elements

We recommend validating your HTML using one of the following tools:
- [W3C Markup Validation Service](/best-practice/validating-html/#w3c-markup-validation-service)
- [HTMLHint](/best-practice/validating-html/#htmlhint)

## Axe DevTools
You will need to use the Chrome browser and [install the Axe DevTools extension from the Chrome Web Store](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?utm_source=chrome-ntp-icon) to be able to do this test.

To run the tests:
1. Open the page to be checked.
2. Use the <kbd>F12</kbd> key, or right-click and choose 'inspect' to open the DevTools pane.
3. Select the more options icon (`>>`).
4. Select Axe DevTools.
5. Select 'scan entire page'.

We've published more in-depth guidance on [how to test using Axe DevTools](/best-practice/automated-testing-using-browser-plugins#arc-toolkit).

## ARC Toolkit
You will need to use the Chrome browser and [install the ARC Toolkit extension from the Chrome Web Store](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce?hl=en) to be able to do this test.

To run the tests:
1. Open the page to be checked.
2. Use the <kbd>F12</kbd> key, or right-click and choose 'inspect' to open the DevTools pane.
3. Select the more options icon (`>>`).
4. Select ARC Toolkit.
5. Select 'run tests'.

We've published more in-depth guidance on [how to test using ARC Toolkit](/best-practice/automated-testing-using-browser-plugins#arc-toolkit).

## WAVE
If your service is live, you can use the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/).

If your service is hosted locally, you will need to use the Chrome browser and [install the WAVE extension from the Chrome Web Store](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?utm_source=chrome-ntp-icon) to be able to do this test.

To run the tests:
1. Open the page to be checked
2. Select the Wave extension icon

We've published more in-depth guidance on [how to test using Wave](/best-practice/automated-testing-using-browser-plugins#wave).

