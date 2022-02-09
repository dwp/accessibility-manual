# {Automated tools: }How to test

These tests can be conducted using any browser on a PC or laptop.

Automated tools cannot find every error or guarantee that your content is accessible for all users. However, they provide a useful tool for finding common errors, information on how to improve accessibility and to assist you in identifying where further testing might be advisable.

## Valid HTML

Valid html code must have:

- Complete start and end tags
- Correctly nested elements
- No duplicate attributes within elements
- Unique IDs.

One way to test for this is to validate your code using the [W3 code validator](https://validator.w3.org/). This will highlight any errors in your code, as well as give warnings about items which will need manual checking.

If the webpages are live, you can copy and paste the URI into the 'Validate by URI' tab. If you are working with html files, these can be uploaded and validated on the 'Validate by file upload' tab.

## Axe DevTools

The [axe DevTools](https://www.deque.com/axe/devtools/) is a web browser extension. It is then accessed by following these instructions:

1. Open the webpage to be checked.
2. Right-click and select **Inspect**.
3. Click on the >> (more options) part of the pane.
4. Select axe DevTools.
5. Choose which test you require.

## ARC Toolkit

The [ARC Toolkit](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce?hl=en) is a web extension. It is accessed in much the same way as the axe DevTools. 

Once you are in the toolkit, select **Run Tests** to begin. This will create a list of errors and warnings. You can select each one to find out more about the nature of the error and the impact it could have on users.

## WAVE

[WAVE](https://wave.webaim.org/) can be used as a standalone webpage or as a web extension. It will check your content against WCAG criteria and highlight any errors and warnings, as well as identifying elements of your code that will assist users of assistive technology.

Either copy and paste the URL into the browser window, or, if you have the web extension installed, load the page and click on the WAVE extension. The results pane will be shown on the left of the screen. Further details and information about each item can be accessed via the tabs.

