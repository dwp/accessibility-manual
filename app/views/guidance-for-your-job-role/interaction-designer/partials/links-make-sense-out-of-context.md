### Links make sense out of context

For any link, remove everything else on the page and make sure it still makes sense. For example "Change" is not clear when you view it in isolation, but "Change bank details" is.

If you need to, you can use visually hidden text to add context to a link. This is text which is still read out by a screen reader but cannot be seen on the screen. For example:
```html
~~<a href="#">
~~  Change <span class="govuk-visually-hidden">bank details</span>
~~</a>
```

Never use a link which tells the user to "Click here". The word "click" makes an assumption that a mouse is being used, but the user could be using a keyboard or some form of assistive technology.

You should work with a content designer to make sure your links make sense both in and out of context.
