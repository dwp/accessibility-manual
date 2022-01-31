# {Headings and labels: }How to test

These tests use the Google Chrome browser and the built in Chrome Devtools. You can do these tests in a different browser, but some of the steps may be different.

## Headings and labels

### How to check the heading structure

Using the Web Developer tool, it is easy to show the document structure for any web page. Open the web page and click on the Web Developer extension to bring up a menu.

Click on the information tab and select view document outline. This will open a new tab and the heading structure for the page will be listed.

### What to check

Check that the page has one <code>&lt;h1&gt;</code> heading. All other headings should be correctly nested. Correctly nested headings will be shown in green, with no further comment. Incorrectly nested headings will be shown in orange with a comment in brackets to explain the error.

Whilst this document structure is open, check that all the headings are clear and descriptive. You are viewing these headings in isolation from their content. Every heading should give a clear indication of what information will follow it.

## Tables

Tables must only be used for displaying tabular data. Never use tables for layout.

### How to check table structure

Tables must be captioned, headed and marked up correctly. Please check the Technical Considerations section for more information about marking up tables.

You can check for table errors using automated tools. The WAVE extension will identify many errors, such as invalid html code. Check in the Details tab to examine any errors found. However, a manual check is also essential.

### What to check

You should check that the following items are present:

- **Caption** - should describe the content of the table
- **Headers** - each column and/or row should have a header, which should be correctly coded in a <code>&lt;th&gt;</code> tag
- **Data** - the information in each cell should relate to the column or row header.

## Form field labels

### How to check form field labels

Open the web page and click on the Web Developer extension to bring up the tool. Click on the Forms tab and select Outline Form Fields Without Labels.

### What to check

Check the whole page/form to ensure that none of the form fields are outlined with a red box. If any field is highlighted by this check, the code must be amended with a <code>&lt;label&gt;</code> tag.
