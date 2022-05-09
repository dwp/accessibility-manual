# {Announcements and alerts: }How to test

These tests can be conducted using any screen reader. If you're on a Mac, we recommend using Voiceover. If you're on a PC you can use NVDA or Narrator.

If you are new to screen readers, we have published additional guidance on [screen reader testing](https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing).

## Validation errors are announced to screen readers
When a validation error occurs, it must be announced by a screen reader without the user needing to find it on the page. 

For example, on most GOVUK style services, as soon as the page loads with errors on, the focus is moved to the [GOVUK Error summary component](https://design-system.service.gov.uk/components/error-summary/) so a screen reader user is immediately made aware there is an error on the page.

To test:
1. Fill in the form field incorrectly.
2. Progress until the validation error appears.
3. Once the error loads, observe whether the screen reader announced that there was an error.

## Validation errors are clear
Whether you can see the page, or you are using a screen reader, it needs to be obvious which field caused the error and how to fix it.

1. Create a validation error on the page.
2. Observe that visually it is obvious there is an error and which field caused it.
2. Use the <kbd>TAB</kbd> key to move through the form fields and confirm the screen reader announces their is an error on the field which caused it.
5. Confirm it is clear how to fix the error, and that this information is also announced by the screen reader.

## Expanded or collapsed sections are announced to screen readers
For any sections which expand or collapse, such as the [GOVUK details component](https://design-system.service.gov.uk/components/details/), it must be announced to a screen reader whether it is in a collapsed or expanded state.

To test:
1. Activate the component which controls the expand and collapse function.
2. Listen to whether the screen reader explains the current state when it changes.

## Notification messages are announced to screen readers
Like error messages, any other notifications also need to be announced by screen readers. This could be notification banners to explain something has been saved or uploaded successfully, or real time information such as a new message being received.

To test:
1. Trigger the notification.
2. Observe whether it announced the notification.

## Popups are announced to screen readers
Pop-ups are often invisible to screen readers because they require additional attributes. 

To test:
1. Activate the pop-up.
2. Observe whether the screen reader announced there was a pop-up.
3. Make sure all the content in the pop-up can be accessed via the screen reader and that it is not reading the page behind it.