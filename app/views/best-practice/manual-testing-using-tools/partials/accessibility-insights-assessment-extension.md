## Accessibility Insights assessment extension

[Accessibility Insights](https://accessibilityinsights.io/) is a Chrome extension. It offers automated testing like Axe DevTools and ARC Toolkit. However, what makes it different is the manual assessment tool for evaluations. 

The assessment tool will guide you through a series of manual tests on each page you load the extension on. It will overlay helpers to identify things like heading levels. Unlike the excel template, the scripts target features rather than listing WCAG criteria. This can make tests feel less repetitive.

You can export each assessment as a HTML file when you're finished.

The pros of Accessibility Insights:
- feature led so tests feel less repetitive
- overlay helpers make testing easier
- easier to pickup if you are new to WCAG 2.1

The cons of Accessibility Insights
- requires a Chrome extension
- overlay helpers can be buggy
- lots of output documents to manage
- outputs can't be edited easily 

To use the Accessibility Insights assessment tool, first [Install Accessibility Insights from the Chrome Web Store](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni).

Accessibility Insights runs from the extension icon. Select it and choose 'Assessment'. This will open a new browser window. You switch back and forth between the two windows using `ALT + TAB` on windows or the command and back-tick keys (`` CMD + ` ``) on a Mac. The back-tick key is usually to the left of the `Z` key.

![](/public/images/best-practice/browser-extension-examples/a11y-insights-1.jpg)

Go through each of the numbered options in the sidebar and complete all the tests. For some tests you can turn on the 'visual helper' icon which will add overlays to the page to make it easier to see what you are testing. 

![](/public/images/best-practice/browser-extension-examples/a11y-insights-2.jpg)

Accessibility Insights does not really handle non-applicable test very well. So if it's not applicable, you should mark it as passed or the end results will not show your service as compliant.

When you have finished all the tests, choose the 'export result' option from the top menu bar. Retain these results as evidence.

![](/public/images/best-practice/browser-extension-examples/a11y-insights-3.jpg)

Accessibility Insights can only do 1 page at a time. So you will have to repeat the tests and the export process on each page and upload them all. 

You can save an assessment part way through and come back to it at a later date by using the save and load functions from the top menu bar.