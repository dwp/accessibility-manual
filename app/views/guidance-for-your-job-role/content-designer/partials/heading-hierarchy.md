### Heading hierarchy

Always use the correct heading levels.

A heading can have any level from H1 to H6. However, each heading level should relate to all the headings above it. The higher the number the more detail on the topic you should be going into.

For example, your might have a page to provide information on COVID-19. On that page you might have a section for information on how to protect yourself, and you might have another sections getting tested.
<pre>
  <code class="html">
    &lt;h1>Stop the spread of COVID-19&lt;/h1>

      &lt;h2>How to stay safe&lt;/h2>
        &lt;h3>Wearing a mask&lt;/h3>
        &lt;h3>Washing your hands&lt;/h3>
        &lt;h3>Social distancing&lt;/h3>

      &lt;h2>How to get a test&lt;/h2>
        &lt;h3>Getting tested if you're a key worker&lt;/h3>
        &lt;h3>Getting a test for somebody in a care home&lt;/h3>
  </code>
</pre>
If there's no connection between the heading you're writing and the ones above it, consider moving that content to another page where it makes more sense.

If you need to change the size of the heading, use a different class to style it rather than changing the heading level itself.

For example:
<pre>
  <code class="html">
    &lt;h1 class="govuk-heading-s">This is a small H1&lt;/h1>
    &lt;h2 class="govuk-heading-l">This is a large H2&lt;/h2>
  </code>
</pre>
