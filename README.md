# Accessibility manual

A community led project to document accessibility guidance and best practice. 

It's important that anybody can contribute to this manual. If you spot any mistakes, want to discuss any points, or you can make any of the content easier to understand, please [raise an issue on GitHub](https://github.com/dwp/accessibility-manual/issues).

This manual is created and maintained by [Craig Abbott](https://twitter.com/abbott567). If you need any help please don't hesitate to ask.

## Project information

This project uses [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and is based heavily on the [GOV.UK Design System](https://design-system.service.gov.uk/).

However, where the GOV.UK Design System is designed to build a static site, this project has been significantly re-purposed to run more like the [GOV.UK Prototype Kit](https://github.com/alphagov/govuk-prototype-kit) simply because it's what I'm used to.

The project runs on [NodeJS](https://nodejs.org/en/) and [ExpressJS](https://expressjs.com/). It uses [Gulp](https://gulpjs.com/) as a task runner and [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) for templating. Content is maintained as [Markdown](https://www.markdownguide.org/).

## Contributing
To run the server (defaults to localhost:3000):
```npm start```

### Test suite
The test will run a series of checks on each page. Before submitting a pull request you should run the test suite as your code will not be accepted with failing tests.

The test suite uses a combination of [Selenium Webdriver](https://www.npmjs.com/package/selenium-webdriver) to check page content, and [Got](https://www.npmjs.com/package/got) to check broken links. It can be time consuming to test every link for a 200 response so be patient. Expect each page to take up to 1 minute to test.

The tests will check check that each page has:
- loaded
- a H1, but not more than one
- content on the page
- no broken links
- no violations on an AxeCore accessibility test

To run the tests (defaults to localhost:8080):
```npm test```

### Building pages
#### Navigation
The navigation data for the header menu is contained in [views/_globals/navigation-data.json](https://github.com/dwp/accessibility-manual/blob/master/app/views/_globals/navigation-data.json). This is where you will need to structure your content.

#### Content
Each page is a folder contained within the [views folder](https://github.com/dwp/accessibility-manual/tree/master/app/views). Each page will need an `index.njk` file where you set the page title, the `pageID` and the `sectionID`. The ID's must match the ID's you set in the `_navigation-data.json` file for the active styles on the navigation menu to work.

As well as an `index.njk` file, you will also need to provide a `README.md` file. The markdown file is your page content.

### Markdown modifications
#### Code blocks
In order to get the correct indentation on code blocks, you will need to add a double tilde (~) at the beginning of each line. This markdown mod stops the markdown compiler having to guess the whitespace and allows it to format the correct indenting. The tildes will be removed during the compile and they wont be presented on the page.

For example
```html
~~<div>
~~  <p>
~~    This is a code snippet.
~~  </p>
~~</div>
```

The function also adds `tab-index="0"` to any `<pre>` tags so that they can be highlighted and navigated by a keyboard. This is to pass [WCAG 2.1 criterion 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html).

You can edit this function in the `renderer.code` function in the [utils/marked-overrides.js](https://github.com/dwp/accessibility-manual/blob/master/app/utils/marked-overrides.js) file.

#### Headings

If you have headings which need context from the section, you can add section headings into your markdown titles using braces. This will create a span with the class `.govuk-caption-xl` to style it correctly on the page.

For example:
```
# {Accessibility testing:} Automated testing
```
Will output:
```html
<h1 id="automated-testing">
  <span class="govuk-caption-xl">
    Accessibility testing: 
  </span>
  Automated testing
</h1>
```

The function is only set to be used on H1's. If you use braces on any other heading level, the XL styling will still be applied. You will need to modify this function if you require it for more heading levels, but this is not recommended.

The heading override will also create automatic ID's so you can create jump-links for your content.
For example:
```
# Contact us
```
Will output
```
<h1 id="contact-us">Contact us</h1>
```

You can edit this function in the `renderer.heading` function in the [utils/marked-overrides.js](https://github.com/dwp/accessibility-manual/blob/master/app/utils/marked-overrides.js) file.
