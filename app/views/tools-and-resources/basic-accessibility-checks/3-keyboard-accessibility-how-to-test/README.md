# {Keyboard accessibility: }How to test

These tests can be conducted using any browser on a PC or Mac.

If you're using the Chrome browser, you will need to use the following keys:
- <kbd>TAB</kbd> - moves forward through interactive elements.
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> moves backwards through interactive elements.
- <kbd>ENTER</kbd> activates a link or button, or selects an option.
- <kbd>SPACE</kbd> activates a button, checks or unchecks a checkbox, expands a dropdown menu.
- <kbd>UP</kbd> and <kbd>DOWN</kbd> arrows move through radio button options, menu options and autocomplete options.
- <kbd>SHIFT</kbd> and <kbd>SHIFT</kbd> + <kbd>SPACE</kbd> will scroll up or down by page, unless you currently have an form control focused.
- <kbd>ESC</kbd> closes a dialogue box.

If you're using a different browser, the keys you need to use might be different.

## All interactions work using a keyboard
It should be possible to access your content using a keyboard. For any interactive elements you can use with a mouse, it must also work using a keyboard.

## Focus is never trapped
A keyboard trap occurs when a user moves into a section of content but cannot get out of it. If you cannot use the <kbd>TAB</kbd> key to escape the section, but there is another interaction to escape, such as a 'close' button on a pop-up, then it is not considered a trap. It is only a trap if there is no obvious way out.

If any movement, in or out of a section of content requires non-standard keyboard input, then instructions should be provided to the user.

When testing for keyboard accessibility, ensure that you can keep moving throughout all sections of the page and that you don't get stuck anywhere, including in pop-up modals, menus and other expandable elements.

## Page has a working skip link
Many webpages have repeated information, such as navigation and menu items at the top of each page. When navigating with a keyboard, the user might have to move through many elements to access the main content of the page. To avoid this, you should provide a way to bypass those blocks of repeated content.

Each page should have a skip link at the top of the page, but they might have several skip links depending on the content.

To test the main skip link, refresh the page and press the <kbd>TAB</kbd> key. The first interactive element should give the user the option to skip to the main content. When you use the <kbd>ENTER</kbd> key, the link should activate and the focus should move to the main content.

## Focus order is logical
When navigating a webpage using a keyboard, the elements that receive focus should follow a logical reading order. Logical usually means it reads top to bottom and left to right.

When testing keyboard navigation, you should make sure that each time you use the <kbd>TAB</kbd> key, it moves you to the next logical interactive item. Any items that cannot be activated with a mouse, should not receive keyboard focus.

In rare circumstances, the focus order may still be considered logical even if it does not go top to bottom. For example, a pop-up modal which has a close button at the top. It would be logical for the close button to be the last item focusable in the modal, because it would make less sense to focus it first and then have the user move backwards in the sequence to close it.

## Focus visible
For a sighted user, one of the biggest challenges in keyboard navigation is being able to see which element currently has focus. 

It should be easy and clear to see where the focus is on the page at any given time. The focus indicator should have a minimum contrast ratio of 3:1. You can use a border, underline, background colour or a combination of these to make sure the focus is visible.

If you tab and no item is visibly in focus, then you will fail [2.4.7 Focus Visible]({wcagify}).

## Focus is contained within modals and popups
As part of focus visible, if there are pop-ups on the page then the keyboard focus must be contained as long as the pop-up is open.

This is because the focus can be hidden or obscured by the pop-up if it is moving around the page behind it, and therefore the focus is not visible.

## Focus does not submit forms or click links
All interactions should be deliberate. If any interactive element is activated just by focusing it with a keyboard then it will fail [3.2.1 On Focus]({wcagify}).
