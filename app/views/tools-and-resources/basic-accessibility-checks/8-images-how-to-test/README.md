# {Images: }How to test

These tests can be conducted using Google Chrome on a PC or laptop, with the Web Developer extension installed.

## View alt text for images

1. Open the Web Developer extension on the page you are checking. 
2. Click on the Images tab.
3. Select 'Replace images with alt attributes'.

This will remove all images from the page and replace them with the alt text. Now you can check that the alt text is clear and accurate.

If an image is purely decorative, i.e. it has no meaning, content or purpose, then it can be marked as decorative by leaving the alt attribute blank, as follows:

```html
<img src="image.jpg" alt=""/>
```

## Images of text

Images of text are not accessible to screen readers unless they are given clear alt text. There are several situations where images of text tend to be used:

- Headings
- Quotes
- Screenshots
- Logos
- Images that include text
- Graphs, charts and diagrams.

Wherever possible, text should always be used rather than an image of the same text. This may require additional styling to achieve the intended layout.

Images of text are only permitted in certain cases, such as logos, images that include text, and graphs, charts and diagrams. In these cases, clear alt text is essential to ensure that all users can access the content equally.