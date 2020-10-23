### Announce dynamic content

If the content of a page changes dynamically, such as a pop-up or using live data, you must announce the changes to a screenreader.

Usually this would be done using the aria-live attributes. Adding aria-live to an element will tell the screenreader that it needs to monitor that content because it is likely to change at some point.

For example, if you have a live chat function, the screenreader would need to know every time a new message was available. By adding aria-live to the chat window, every time you append something to it the screenreader will read it out. By setting it to polite, it means the screenreader will finish anything it is already reading before reading out the appended message.
<pre>
  <code class="html">
    &lt;div id="chat-window" aria-live="polite">
      &lt;p>
        Hello, how can I assist you?
      &lt;/p>
    &lt;/div>
  </code>
</pre>
You can [read more about aria on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).
