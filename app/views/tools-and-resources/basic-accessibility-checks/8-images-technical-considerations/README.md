# {Images: }Technical considerations

## Alternate text

Images should be coded in html using the `<img>` tag, with attributes for the source and alt text. The alt text should be concise and describe the image accurately. 

```html
<img src="image.png" alt="Man wearing a helmet and leather jacket"/>
```

If the image is decorative, the alt attribute should be empty.

```html
<img src="background-image.png" alt=""/>
```

A screen reader will tell the user that it is an image, so you don't need to include "Image of..." in your alt text. It may, however, be helpful to include the type of image, if this is relevant. E.g. 'Photo of man sitting under a tree" or "Black line illustration of man sitting under a tree".

### Linked images

If an image is also a link, e.g. an icon, the alt text should tell the user where the link will take them, e.g. Home Page.

## Long description

If an image is particularly complex, such as a graph, chart or diagram. You should give a brief alt text in the `alt` attribute and then give a more detailed description, either on the page or as a link to another page.

It is usually recommended to make the long description visible for all users, as some people with cognitive impairments may struggle to understand complex images and this can help them too.
