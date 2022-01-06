# {Keyboard accessibility: }How to test

These tests can be conducted using any browser on a PC or laptop.

## Keyboard accessible

### How to check keyboard accessibility

It should be possible to access your content using a keyboard instead of a mouse. This can be achieved by using the following keys:

- <kbd>TAB</kbd> - moves forward through interactive elements
- <kbd>SHIFT+TAB</kbd> - moves backwards through interactive elements
- <kbd>ENTER</kbd> - activates a link or button, or selects an option
- <kbd>SPACE</kbd> - activates a button, checks/unchecks a checkbox, expands a dropdown menu
- <kbd>UP</kbd> and <kbd>DOWN</kbd> arrows - move through radio button options, menu options and autocomplete options; move up and down the content by line
- <kbd>SPACE</kbd>/<kbd>SHIFT+SPACE</kbd> - scroll up or down by page
- <kbd>ESC</kbd> - closes a dialogue box.

### What to check

As you navigate using the keyboard, check for the following:

- All interactive items must be able to be accessed using the <kbd>TAB</kbd> key
- Any item that can be activated using a mouse must also be able to be activated using the keyboard
- All menu items, including any drop-down menus must be able to be used without needing a mouse
- Form elements must be able to be accessed and information inputted.

There should be nothing that can be accessed using a mouse, which cannot be accessed in an equivalent way using a keyboard.

## No keyboard trap

A keyboard trap occurs when a user tabs into a section of content but cannot tab out of that section, thus trapping them within a section. If any movement, in or out of a section of content requires non-standard keyboard input, then instructions should be provided to inform the user.

When testing for keyboard accessibility, ensure that you can keep moving throughout all sections of the page and that you don't get stuck anywhere, including in pop-up modals, menus and other expandable elements.

## Focus order

When navigating a webpage using a keyboard, the elements that receive focus should follow a logical reading order (usually top to bottom and left to right). When testing keyboard navigation, you should ensure that each click of the <kbd>TAB</kbd> key moves you to the next logical interactive item. Any items that cannot be activated with a mouse, should not receive keyboard focus.

## Focus visible

For a sighted user, one of the biggest challenges in keyboard navigation is being able to see which element currently has focus. It should be easy and clear to see where the focus is on the page at any given time. Focus can be indicated by a border box, underline, background colour or a combination of these.

When WCAG 2.2 is published (expected early 2022), there will also be a requirement that the focus indicator has a minimum contrast of 3:1. It would therefore be advisable to check contrast between focus and background to ensure that your content will remain compliant when this change occurs.

### How to test for focus visible

Whilst performing the keyboard accessibility test, check that every interactive item has a visible indicator when in focus. If you tab and no item is visibly in focus, you will need to investigate this. Check that the focus indicator has good contrast and is clearly visible throughout the content.

## Bypass blocks

Many webpages have repeated information, such as navigation and menu items at the top of each page. When navigating with a keyboard, this can require many keystrokes to access the main content of the page. To avoid this, you should provide one or more bypass blocks. These are usually hidden at the top of each page and are the first item in the tab order.

### How to test for bypass blocks

Refresh the page or open it in a new tab. Press the <kbd>TAB</kbd> key. A link should appear at the top of the page, with focus, giving the option to skip to main content (or other section of the page). When you press <kbd>ENTER</kbd>, you should be taken to the main content. Check that this is what you would expect it to be.

## Name, role, value

If form elements do not receive focus in the logical flow of the content, you may have errors in the coding that relate to name, role and/or value. The technical aspects of this criterion are discussed in more detail in the Technical Considerations section.

For more information on how to navigate using a keyboard, please have a look at the [WebAIM keyboard accessibility information](https://webaim.org/techniques/keyboard/) pages.