WCAG criteria:
: [1.3.1 Info and Relationships]({wcagify})
: [2.4.6 Headings and Labels]({wcagify})
: [3.3.2 Labels or Instructions]({wcagify})
Things to check:
: All headings and labels are clear and accurate
: All pages have a H1, but not more than one
: [No heading levels are skipped](/guidance-for-your-job-role/software-engineer-or-frontend-developer#heading-hierarchy)
: Tables are captioned and headed correctly
: [All form fields have labels](/guidance-for-your-job-role/software-engineer-or-frontend-developer#inputs-and-labels)

Every page should have a single heading level one. This sets the user up to immediately know what content to expect on the page.

Headings and labels should be clear and accurately describe the content which follows. Any content below a heading should be related to the heading, and every heading should be related to the one above it.

### Examples of fails for headings and labels
No H1 on the page:
```html
<main>
  <p>
    Welcome to your account, here you can change your profile or edit your settings.
  </p>
</main>
```

Same H1 used on multiple pages:
```html
<!-- /Search -->
<h1>Search</h1>
<label for="search">Search</label>
<input id="search" type="text" name="search">
```
```html
<!-- /Results -->
<h1>Search</h1>
<label for="search">Search</label>
<input id="search" type="text" name="search">

<p>Results</p>
<ul>
  ...
</ul>
```

Skipped heading levels:
```html
<h1>This is a H1</h1>
...
<h3>H2 has been skipped</h3>
...
<h5>H4 has been skipped</h5>
```
