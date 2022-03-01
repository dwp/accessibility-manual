# {Page title: }How to test

There are two ways you can test this criterion:

1. Visually check the browser tab
2. Manually check the title tag

If you hover the mouse over the browser tab which has the page loaded, the page title should be displayed after a few sections.

Alternatively, you can inspect the HTML and look for the `<title>` tag.

In Chrome, you can do this by pressing <kbd>F12</kbd> or right-clicking the page and choosing 'inspect'.

Inside the `<head>` tag you will need to look for the `<title>` tag.

## Checking the page title
The page title should be made up of at least two parts. The H1 of the page you're currently on, and the name of the website or service. For example:
```html
<title>Accessibility Law - DWP Accessibility Manual</title>
...
<h1>Accessibility Law</h1>
```

If the service is part of GOV.UK, then that should also be in the title. For example:

```html
<title>What is your name? - Apply for Pension Credit - GOV.UK</title>
...
<h1>What is your name?</h1>
```
