# {Links and buttons: }Technical considerations

## Links

Links should be coded using an `<a>` tag, with the URL (either full or relative) in the `href` attribute. Ensure that the text of the link is meaningful, even out of context.

```html
<a href="URL">Meaningful text</a>
<a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines</a>
```

Output:

[Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/)

**Remember**: a link should take you somewhere. 

## Buttons

There are several ways to code buttons. The full list is shown in [Keyboard Accessibility: technical considerations](3-keyboard-accessibility-technical-considerations). However we recommend using the following code wherever possible:

```html
<button>Meaningful name</button>
```

Output:

<button class="govuk-button">Submit</button>

**Remember**: a button should perform an action.