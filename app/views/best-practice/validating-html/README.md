# Validating HTML
We previously advocated for using HTMLHint. But we've found that HTML Validator seems to be a much more thorough and consistent tool. So we've updated our guidance to reflect this.

## HTML Validator
Before you can install HTMLValidator you will need to [install NodeJS](https://nodejs.org/en/) to be able to use Node Package Manager (NPM).

You can use [HTMLValidator](https://www.npmjs.com/package/html-validator) to validate your HTML on your local machine or in your acceptance tests.

To use HTMLValidator from the command line you need to install the command line tool globally. Open the Terminal app and use the following command:

```
npm i html-validator-cli -g
```

Once you've installed HTMLValidator you can run it by passing in a URL or a filename. You can also use it against localhost URLs if your server is running.

To use HTMLValidator you can just pass in a URL, or you can add the `--verbose` flag to get a full read out of any errors:
```
html-validator http://localhost:3000
// or
html-validator http://localhost:3000 --verbose
```

Example output from HTML Validator
```
Page is not valid
//or
Error: Attribute “aria” not allowed on element “svg” at this point.
From line 1091, column 9; to line 1091, column 164
There were errors.
```

## W3C Markup Validation Service
If your website is on a public URL you can use the [W3C Markup Validation Service](https://validator.w3.org/). If you need to validate HTML on your local machine HTML Validator is a better option.

If the webpages are live, you can copy and paste the URI into the 'Validate by URI' tab. If you are working with html files, these can be uploaded and validated on the 'Validate by file upload' tab.

Example output from W3C Markup Validation Service:
```
Error: An img element must have an alt attribute, except under certain conditions...

From line 7, column 1; to line 7, column 21

<img src="cat.jpg" />
```