# {Responsive design: }How to test

These tests use the Google Chrome browser and the built in Chrome Devtools. You can do these tests in a different browser, but some of the steps may be different.

## Resizing text
You can change the browser font size in most modern browsers. The examples in this test use Edge or Chrome. 

If you're using a Windows, you will need to swap references of the command (CMD) key for the control (CTRL) key.

### How to set the font size
1. Open Chrome and type `chrome://settings` into the address bar.
2. In the settings, type `font size` into the search bar.
3. Change the font size option using the drop down menu.

### What to check with the font resized
1. Make sure the font size responds to the settings.
2. Make sure the layout isn't broken at different font sizes.
3. Make sure the text remains clear and does not clip or overlap.

## Resizing the viewport
You can scale the viewport by changing the size of the browser window, zooming in or by viewing the website on a different device. You can simulate all of these things by using Chrome Devtools.

### How to set the viewport size
1. Open the developer tools. You can right click and choose inspect, or you can press F12 on the keyboard.
2. Use the icon for the developer toolbar view. To use the keyboard you can press `CMD` + `SHIFT` + `M`.
3. From the dimensions menu, choose `responsive` and use the handles or the width input field to resize the page.

### What to check with the viewport resized
1. Make sure you can read all of the text.
2. Make sure the layout is not broken.
3. Make sure you can't horizontal scroll on the page unless it is on something which requires horizontal scrolling to make sense, such as a map or a table of data
4. Make sure steps 1 to 3 work at various sizes and at a minimum of 320px wide.

## Switching between portrait and landscape
You can simulate changing the device orientation using Chrome Dev Tools.

### How to swith the orientation
1. Open the developer tools. You can right click and choose inspect, or you can press F12 on the keyboard.
2. Use the icon for the developer toolbar view. To use the keyboard you can press `CMD` + `SHIFT` + `M`.
3. From the dimensions menu, choose `iPhone 5/SE` to simulate a 320px wide device.
3. From the toolbar use the `rotate` icon.

### What to check when switching the orientation
1. Make sure the layout is not broken in portrait mode
2. Make sure all the text is readable in portrait mode
3. Make sure the layout is not broken in landscape mode
4. Make sure all the text is readable in landscape mode
