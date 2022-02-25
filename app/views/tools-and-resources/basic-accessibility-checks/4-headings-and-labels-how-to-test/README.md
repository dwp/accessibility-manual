# {Headings and labels: }How to test

These tests use the Chrome browser and the chrome Web Developer Tool extension. You can do these tests in a different browser, but some of the steps may be different.

## Headings and labels are clear and descriptive
Headings and labels must be descriptive. Every heading should give a clear indication of what information will follow it, and every label should clearly explain what information you are required to enter.

## Page has a H1, but not more than 1
Every page should have a H1. All of the content on that page should be related to the H1. A page can technically have more than 1, but it can become confusing for the user. If you need more than a single H1, it is usually a sign that your design is too complicated.

## No heading levels have been skipped
You cannot use a heading level if the content is not related to the number which came before it. Headings should be used to break content down into smaller related chunks. So you can't have a H4 if it is not related to a H3, and you can't have a H3 if it is not related to a H2. 

Using the Web Developer tool, it is easy to show the document structure for any web page. Open the web page and click on the Web Developer extension to bring up a menu.

Click on the information tab and select view document outline. This will open a new tab and the heading structure for the page will be listed.

Check that the page has one <code>&lt;h1&gt;</code> heading. All other headings should be correctly nested. Correctly nested headings will be shown in green, with no further comment. Incorrectly nested headings will be shown in orange with a comment in brackets to explain the error.

The tool is not 100% accurate. It can throw up positives with complex pages. Like all tools it is useful to let you check things quickly, but don't just assume it is always correct.

## Tables
Tables must only be used for displaying tabular data. Never use tables for the layout.

For actual data tables, they must captioned, headed and marked up correctly. This means they need:

- **A caption** - should describe the content of the table
- **Headers** - each column and/or row should have a header, using a `<th>` tag
- **Data** - the information in each cell should relate to the column or row header, and should not be blank.

Table headings will be highlighted with their scope. Column headings should use `scope="col"` and row headings should use `scope="row"`. The caption should be placed between the `<table>` tags using `<caption>` tags.

You can manually inspect the code to check the table, but it is often easier to use [Wave](/best-practice/automated-testing-using-browser-plugins#wave). Wave should tell you if anything on the table is missing, and you can use the 'details' tab to check all of the structural elements are correct.


### All form fields have labels
Every form field must have a label. You can manually check it in the code of you can use the Web Developer extension.

There are two ways to assign a label to a form field. The recommended way to assign a label to a name is using the `for` and `id` attributes. For example: 
```html
<label for="name">Name</label>
<input id="name" type="text" />
```

An alternative way is that you can wrap the input in the label:
```html
<label>
  Name
  <input type="text" />
</label>
```

To quickly check form fields which do not have a label assigned to them, open the Web Developer extension, choose the 'Forms' tab and choose 'Outline Form Fields Without Labels', this will visually outline any inputs without a label.
