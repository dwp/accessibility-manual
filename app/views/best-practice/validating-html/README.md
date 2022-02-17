# Validating HTML
## HTMLHint
Before you can install HTMLHint you will need to [install NodeJS](https://nodejs.org/en/) to be able to use Node Package Manager (NPM).

You can use [HTMLHint](https://htmlhint.com/docs/user-guide/getting-started) to validate your HTML on your local machine.

To use HTMLhint from the command line you need to install it globally. Open the Terminal app and use the following command:

```
npm install htmlhint -g
```

Once you've installed HTMLhint you can run it by passing in a URL or a filename. You can also use it against localhost URLs if your server is running.

To use HTMLhint:
```
htmlhint http://localhost:3000
```

Example output from HTMLHint
```
L299 |... viewBox="0 0 13 17">
          ^ The attribute name of [ viewBox ] 
          must be in lowercase. (attr-lowercase)

Scanned 1 files, found 1 errors in 1 files (55 ms)
```

You can [configure HTMLHint](https://htmlhint.com/docs/user-guide/configuration) to ignore false positives such as viewBox not being lowercase. 

Create a `htmlhint.json` file in your project and add your [HTMLHint rules](https://htmlhint.com/docs/user-guide/list-rules). For example:

```json
{
  "attr-lowercase": ["viewBox"] // Ignore rule for viewBox only
}
```

Then use your config file when running HTMLHint:
```
htmlhint --config htmlhint.json http://localhost:3000
```

## W3C Markup Validation Service
If your website is on a public URL you can use the [W3C Markup Validation Service](https://validator.w3.org/). If you need to validate HTML on your local machine HTMLHint is a better option.

To use the W3C Markup Validation Service, Put your URL in, configure your options and select 'Check'. 

Example output from W3C Markup Validation Service:
```
Error: An img element must have an alt attribute, except under certain conditions...

From line 7, column 1; to line 7, column 21

<img src="cat.jpg" />
```