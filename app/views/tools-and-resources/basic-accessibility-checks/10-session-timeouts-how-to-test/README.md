# {Session timeouts: }How to test

These tests can be conducted using any screen reader. If you're on a Mac, we recommend using Voiceover. If you're on a PC you can use NVDA or Narrator.

If you are new to screen readers, we have published additional guidance on [screen reader testing](https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing).

## There is a way to extend session timeouts without losing data
We recommend services follow the [manage a session timeout pattern](https://design-system.dwp.gov.uk/patterns/manage-a-session-timeout) in the DWP Design System.

### To check the manage a session timeout pattern
You'll need to wait for the session timeout to pop-up, then check that:
- it is announced to a screen reader
- you can extend the session without losing any data
- the interaction to extend is simple, such as pressing a button

### If you're not using the manage a session timeout pattern
To pass WCAG 2.1 one of the following statements needs to be true:
- the session timeout is longer than 20 hours by default
- before the session times out, the user is given an opportunity to extend the session without losing any data, using a simple interaction
- there is a way to turn the session timeout off before the user encounters it
- there is a way to extend the session timeout to at least 10 times it's default setting before the user encounters it
