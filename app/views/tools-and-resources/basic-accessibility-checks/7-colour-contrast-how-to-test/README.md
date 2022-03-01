# {Colour contrast: }How to test

Most of the colour contrast issues can be picked up using automated tools like [Arc Toolkit](/best-practice/automated-testing-using-browser-plugins#arc-toolkit), [Axe Devtools](/best-practice/automated-testing-using-browser-plugins#axe-devtools) and [Wave](/best-practice/automated-testing-using-browser-plugins#wave). So if you're running these as part of the basic accessibility checks then they should find most colour contrast issues automatically.

The colour contrast ratio required for compliance depends on what the element is, and if it's text it depends on what size it is.

If the tool cannot read the font details, you will need to use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). You will need the font size and the hexadecimal colour codes for the background and foreground colours. If either of these is a multicoloured image, take the colour where the contrast is at its lowest. Insert the colour codes into the relevant fields in the contrast checker and read the results against the font size.

When looking at the pass/fail indicators on the contrast checker, remember that Public Sector Bodies must comply at AA level.

## Text
WCAG describes font sizes using points (pt). In most situations, 1 point will be 1.333 pixels. So you can multiply the points by 1.333 to get a rough pixel equivalent. For example, 18 multiplied by 1.333 = 23.99 pixels, which would round up to 24px. This is not an exact science, but it might help you to understand why the [font sizes in the GOVUK Design System](https://design-system.service.gov.uk/styles/typography/) were chosen.

### Large text
Large text needs to have a contrast ratio of 3:1, and is defined in two different ways:
- 18pt or larger
- 14pt or larger and bold

So, for any text which is larger than 18pt (24px in most cases) then whether it is bold or not it is classed as large text and needs to have a contrast ratio of 3:1 against the background. 

For smaller text, depending on whether it is bold or not changes whether it is classed as normal or large text.

If the font size is 14pt (19px in most cases) or larger and it *is* bold, then it is still classed as large text and still only needs to have a contrast ratio of 3:1 against the background.

### Normal text
If the font size is 14pt (19px in most cases) or larger and it is *not* bold, then it is only classed as normal text and it needs to have a higher contrast ratio of 4.5:1 against the background.

## Non-text elements
Non-text elements are anything which is important to use or understand the content, but is not text. For example, this could be the background colour of a button against the background colour of the page, or it could be sections of a graph explaining data.

For anything which is not text, it needs to have a contrast ratio of 3:1.

## Focus styles
Use the <kbd>TAB</kbd> key to move through all of the interactive elements and make sure there is sufficient colour contrast.

Focus styles are part of the user interface so they also need to have a contrast ratio of 3:1. This means if links are highlighted using colour alone, then they need to have a 3:1 contrast between the highlight colour and the page and a 3:1 ratio between the highlight colour and the text.

If there is an additional visual cue to indicate what is focused and that meets the contrast ratio of 3:1, then any secondary colour does not. For example, the GOVUK focus style uses a thick black border and a yellow highlight. The yellow does not meet 3:1 against the white background, but the black border does.
