### Alternative text for non-text content

If the content contains images or other non-text content such as graphs or charts, then you need to define what the alt attribute should be.

If an image is purely decorative then you need to provide an empty alt attribute so that it is hidden from screen readers. However, if the image adds context to the content, then it should have a description.

Example of a decorative image:
```html
~~<img src="patterned-background.jpg" alt="" />
```
Example of an image which needs context:
```html
~~<img src="cat.jpg" alt="A cat wearing sunglasses." />
```

You should work with an Interaction Designer and a Content Designer to make sure alternative text is provided for images that need it.
