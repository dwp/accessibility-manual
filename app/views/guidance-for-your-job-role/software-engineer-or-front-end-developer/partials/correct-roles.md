### Correct roles

For any elements on the page, they should use the correct HTML tags. If you absolutely must use a different tag than would usually be expected, then you need to assign it the correct role. This allows assistive technology to still interact with the element as if the correct tag were used.

A common example of this is styling links to look like buttons. We should not really do this anyway as it makes user interfaces hard to predict. Links should navigate between pages and buttons should interact with data, such as submitting a form. However there might be some instances where research shows that a link needs to be more visible, such as a call to action.

For example:
<pre>
  <code class="html">
    &lt;a href="/apply-now" class="btn" role="button">Apply now&lt;/a> 
  </code>
</pre>
By giving the link a role of button, it can now be determined to be a button. So if somebody is using voice recognition software such as Dragon, when they say "click button", Dragon will be able to find it on the page.

You can [read more about aria roles on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles).