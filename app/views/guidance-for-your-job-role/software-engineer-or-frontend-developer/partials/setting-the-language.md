### Setting the language

The language of a page should be set. This allows browsers to render the correct content, but it also allows assistive technologies to be able to pronounce the content correctly.

The language of the page should always be set on the HTML tag, but you also need to set the languages of any parts that might be different. For example, you might have a link labelled "<span lang="cy">Cymraeg</span>" to switch the language into Welsh. If you don't add a lang attribute with a Welsh code, the screen reader will try to read it out in English and it will get the pronunciation wrong.

For example:
```html
<!DOCTYPE html>
<html lang="en">
  ...
  <nav>
    <ul>
      <li><a href="home">Home</a></li>
      <li><a href="welsh" lang="cy">Cymraeg</a></li>
      ...
```

If you don't set the language of the page, you will fail WCAG 3.1.1 Language of page, and if you don't tag up any differences in language correctly you will fail WCAG 3.1.2 Language of parts.
