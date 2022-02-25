# {Responsive design: }How to test

We do these tests using the Chrome browser and the built in Devtools. You can do these tests in a different browser, but some of the steps may be different.

No horizontal scrolling on banned elements at 320px
All information available in portrait and landscape

The keyboard shortcuts in this section are for Mac devices. If you are using Windows, then you will need to use the <kbd>CTRL</kbd> key rather than the <kbd>CMD</kbd> key.

## Scale the font size by zooming
Test the font size scales up to at least 200% without overlapping or or getting cut off, by using the <kbd>CMD</kbd> and <kbd>+</kbd> keys.

## Scale the font size in the browser settings
To pass the WCAG criteria for resizing text, you only need to be able to zoom in using the browser. But this places an additional burden on users who have already increased the font size in their browser settings. 

You should make sure the font does actually scale based on the browser settings, and that when it does it does not overlap or get cut off.

To do this test on Chrome:
1. Open Chrome and type `chrome://settings` into the address bar.
2. In the settings, type `font size` into the search bar.
3. Change the font size to 'very large' option using the drop down menu.
4. Check that the font on your page scaled up and that it is still readable.

## Check horizontal scrolling at 320px wide
In WCAG, you're only allowed horizontal scrolling on certain elements. Things like maps and data tables.

For everything else, it needs to reflow so that it fits on tablet and mobile devices without the user needing to scroll horizontally.

You can scale the viewport by changing the size of the browser window, zooming in or by viewing the website on a different device. However, you can simulate all of these things by using Chrome Devtools.

You will need to make sure that:
- All of the text can be read at different sizes.
- The layout is never broken.
- You can't horizontal scroll on the page unless it is on something which requires horizontal scrolling to make sense, such as a map or data table.

How to test in Chrome:
1. Open the developer tools. You can right-click and choose inspect, or you can use the <kbd>F12</kbd> key.
2. Select the icon for the developer toolbar view or press <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>M</kbd>.
3. From the dimensions menu, choose 'responsive' and use the handles or the width input field to resize the page.
4. Scale the page down gradually to 320px wide while checking the content.

## Check portrait and landscape mode
To meet WCAG, your service needs to work in both portrait mode and landscape mode.

You need to make sure:
- The service is not locked to a single orientation.
- The layout and text are not broken in portrait mode.
- The layout and text are not broken in landscape mode.

How to test in Chrome:
1. Open the developer tools. You can right-click and choose inspect, or you can use the <kbd>F12</kbd> key.
2. Select the icon for the developer toolbar view or press <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>M</kbd>.
3. From the dimensions menu, choose 'iPhone 5/SE' to simulate a 320px wide device.
3. From the dimensions menu select the 'rotate' icon.
