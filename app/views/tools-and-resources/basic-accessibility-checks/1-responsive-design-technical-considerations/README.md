# {Responsive design: }Technical considerations

If you are using [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/) you can use all of the responsive styles, layouts and components in the [GOV.UK Design System](https://design-system.service.gov.uk/).

If you are not using GOV.UK Frontend, or you have built a custom component, then you need to do more work to make sure it is responsive and accessible.

## Responsive text
Using the wrong units of measurement in your CSS a big barrier for some visually impaired users. If you set your font sizes using pixels you will always fail [1.4.4 Resize text]({wcagify}).

Pixels work off the resolution of the screen on your device. They measure the distance on the screen using the number of dots per inch as a guide. Because 16px is always going to be 16 physical dots long on a display, no matter what you do in the browser settings, the browser will always count 16 pixels on the display and draw the font to that size.

To allow the fonts spacing to scale, you should use relative units of measurement. Using REMs is the easiest way to make your font sizes scale. You can also use EM or percent, but these can be more tricky. Pixels (PX) should only be used for stylistic elements which do not need to scale, like borders and horizontal rules.

### Using REM
REM is the easiest way to control your layout with responsive font sizes. It works by scaling relative to the root element by using basic math. The root element is the `<html>` tag, and this inherits the font size from the browser.

The browser will calculate the font size by multiplying the browser font size and the REM font size. For example, if the browser font size was set to 16px, then the calculation for 1rem would be: 16px multiplied by 1 which would be 16px.

In the following example, the font size and the margins will scale relative to the browser settings. But the border and the padding from the edges of the panel will remain the same.

Example:
```css
.panel {
  font-size: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  padding: 10px;
  border: 2px solid #000;
}
```

In most modern browsers, the default font size 16px. In Chrome and Edge this is called medium, 20px is called large, and 24px is called very large. So, `font-size:1rem` can be 16px, 20px or 24px high depending on the browser settings. But, `font-size:16px` will always be 16px high.

REM vs Pixels example:
```css
p { font-size: 1rem; }  /* could be 16px, 20px or 24px */
p { font-size: 2rem; }  /* could be 32px, 40px or 48px */
p { font-size: .5rem; } /* could be 8px, 10px or 12px */
p { font-size: 16px; }  /* would only ever be 16px */
```

### Using EM
EM is very similar to REM in the way it is calculated. The main difference is that it is relative to the parent element rather than the browser font size. This can lead to a problem called compounding.

For example, if you wanted a child element to have a font size twice as large as the parent element, you can set the parent to 1em and the child to 2em. If the browser is set to 16px, you'd expect the child element to be 32px.

Compounding happens when font sizes are unexpectedly calculated over multiple nested levels. The font size is recalculated with every child element giving you a much larger or smaller font size than intended.

An example of compounding:
```css
.parent { font-size: 1em; }
.child { font-size: 2em; }
```
```html
<!-- the browser font size is 16px -->
<div class="parent">
  This text would be 16px
  <div class="child">
    This text would be 32px, as expected
    <div class="child">
      This text would be 64px, not as expected
      <div class="child">
        This text would be 128px, definitely not as expected
      </div>
    </div>
  </div>
</div>
```

## Responsive layouts
To make your layouts responsive you should use relative 
