# {Images: }How to test

These tests can be conducted using Google Chrome on a PC or laptop, with the Web Developer extension installed.

## View alt text for images
All images must have an alt attribute. If the image is important, it needs to have a description. 

For example:
```html
<img src="cat.jpg" alt="A tabby cat wearing sunglasses" />
```

If an image is purely decorative, it has no meaning, content, or purpose, then it can be marked as decorative by leaving the alt attribute blank, as follows:
```html
<img src="pattern.jpg" alt="" />
```

To check alt attributes, you can check the HTML code in the inspector, or you can use the Web Developer extension.

1. Open the Web Developer extension on the page you are checking. 
2. Click on the Images tab.
3. Select 'Replace images with alt attributes'.

This will remove all images from the page and replace them with the alt text. Now you can check that the alt text is clear and accurate.

## Images of text
Images of text should be avoided. They don't scale well for users who may need to zoom in. The text can become blurry and difficult to read.

Images of text are only permitted in certain cases, such as logos, screenshots and graphs or diagrams. In these cases, clear alt text is essential to ensure that all users can access the content equally.
