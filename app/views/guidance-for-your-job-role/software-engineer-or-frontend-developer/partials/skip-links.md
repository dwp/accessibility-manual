### Skip links

If you have repetitive content on a page then you need to provide a way to skip over that content. The most common use of a skip link is to bypass the navigation menu by placing a link at the top of the body tag which jumps to the main tag.

You may also need skip links if you include things like social media feeds which can trap a keyboard user.

For example:
```html
<body>
  <a href="#main-content">Skip to main content</a>
  <nav>
  ...
  </nav>
  <main id="main-content">
  ...
  </main>
</body>
```

Skip links are often not visible on the page, they are styled to only appear when using screen readers or when they receive keyboard focus. A skip link does not need to be hidden from the page, but they do need to be present to jump over anything which might be a burden for the user.
