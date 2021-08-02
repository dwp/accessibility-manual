### Announce dynamic content

If the content of a page changes dynamically, such as a pop-up or using live data, you must announce the changes to a screen reader.

Usually this would be done using the aria-live attributes. Adding aria-live to an element will tell the screen reader that it needs to monitor that content because it is likely to change at some point.

For example, if you have a live chat function, the screen reader would need to know every time a new message was available. By adding aria-live to the chat window, every time you append something to it the screen reader will read it out. By setting it to polite, it means the screen reader will finish anything it is already reading before reading out the appended message.
```html
~~<div id="chat-window" aria-live="polite">
~~  <p>
~~    Hello, how can I assist you?
~~  </p>
~~</div>
```

You can [read more about aria on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).
