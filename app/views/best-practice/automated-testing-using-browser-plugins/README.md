# Automated testing using browser plugins

## ARC Toolkit
[Install Arc Toolkit from the Chrome Web Store](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce?utm_source=chrome-ntp-icon).

The ARC Toolkit runs from the Chrome DevTools panel. Use `CMD + SHIFT + C` to open the Chrome Dev Tools. Alternatively you can right click on the page and choose 'Inspect'.

Chrome Dev Tools has options for Elements, Console, Sources etc. One of those options is 'more tabs' which is marked by two small right facing arrows `>>`. Choose the 'more tabs' option, and then choose 'ARC Toolkit'. 

![](/public/images/best-practice/browser-extension-examples/arc-toolkit-1.jpg)

We are not really interested in what passes, we want to see what fails. So, uncheck the option for 'show passes'. and choose 'Run tests'. 

![](/public/images/best-practice/browser-extension-examples/arc-toolkit-2.jpg)

ARC Toolkit reports two types of issues, errors and warnings. Errors are what the tool has decided is definitely an issue. Warnings mean the tool could not decide if it was definitely an error, so you must check it manually. Errors are noted in the red column with the exclamation point `!` icon. Warnings are noted in the yellow column with the question mark `?`.

![](/public/images/best-practice/browser-extension-examples/arc-toolkit-3.jpg)

## Axe DevTools
[Install Axe DevTools from the Chrome Web Store](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?utm_source=chrome-ntp-icon)

Axe DevTools runs from the Chrome DevTools panel. Use `CMD + SHIFT + C` to open the Chrome Dev Tools. Alternatively you can right click on the page and choose 'Inspect'.

Chrome Dev Tools has options for Elements, Console, Sources etc. One of those options is 'more tabs' which is marked by two small right facing arrows `>>`. Choose the 'more tabs' option, and then choose 'axe DevTools'. 

![](/public/images/best-practice/browser-extension-examples/axe-devtools-1.jpg)

The first time you use Axe DevTools you will need to answer some questions. It is just analytics data for Deque to find out how their tool is being used.

Choose the 'scan all of my page' option to run the tests.

Axe DevTools reports two types of issues, automatic issues and needs review. Automatic issues are what the tool has decided is definitely an issue. Needs review means the tool could not decide if it was definitely an issue, so you must check it manually.

Turn on the 'highlight' option. This will add a visual indicator to show which element caused the issue. It makes it easier to understand where the problems are.

![](/public/images/best-practice/browser-extension-examples/axe-devtools-2.jpg)

Choose each issue from the list. If there are more than one of the same issue, cycle through them using the pagination links.

![](/public/images/best-practice/browser-extension-examples/axe-devtools-3.jpg)

## Wave
[Install Wave](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?utm_source=chrome-ntp-icon)

Wave runs from the extension icon. Select it and wait for it to analyse the page.

Wave reports 3 types of issues, errors, contrast errors and alerts. Contrast errors are errors relating solely to colour contrast. Errors are all the other errors the tool has decided are definitely an issue. Alerts means the tool could not decide if it was definitely an issue, so you must check it manually.

![](/public/images/best-practice/browser-extension-examples/wave-1.jpg)

Wave also flags good structure and accessibility features. These can clutter the page and make it difficult to see where the problems are. So choose 'details' and then uncheck everything but the errors and alerts.

If an error is greyed out it means it is not visible on the page right now. For example a mobile menu might be hidden.

![](/public/images/best-practice/browser-extension-examples/wave-2.jpg)

You can read the errors from the Wave panel or you can click on the overlays on the page to see which error they relate to.

![](/public/images/best-practice/browser-extension-examples/wave-3.jpg)
