### Labels and instructions

For anything which requires a user input a label must be provided.

Every label should describe what is expected in the input. Keep labels simple at first and only had hint text or additional instructions if your user research shows there is a need for it.

There are some examples of inputs without labels such as the Search field at the top of the GOV.UK site. These will still need descriptive labels, even if they're not visible on the screen.

For example:
```html
~~<label for="search" class="govuk-visually-hidden">
~~  Search DWP
~~</label>
~~<input type="search" id="search" class="govuk-input" ... />
```
