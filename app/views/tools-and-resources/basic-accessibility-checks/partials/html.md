WCAG criteria: 
: [4.1.1 Parsing]({wcagify})
Things to check: 
: [Make sure HTML is valid](/best-practice/validating-html)
Documentation:
: [{HTML: }Guidance and examples](/tools-and-resources/basic-accessibility-checks/guidance-and-examples-html)

Over 40% of accessibility issues are caused by HTML not being used correctly. If your HTML is not valid, it automatically fails WCAG 2.1.

Even if your HTML is valid, it can still be bad. You should always use the correct tags so that assistive technologies which read the code can interpret the design properly.

### Examples of fails for HTML
Not using HTML to the correct specifications:
```html
<p>
  <p>You can't have a paragraph inside of a paragraph.</p>
</p>
```

Not closing tags properly:
```html
<div>
  <p>There is no closing tag after this paragraph.</p>
  
```
