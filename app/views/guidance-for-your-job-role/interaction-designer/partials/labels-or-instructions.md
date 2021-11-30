### Labels and instructions

For anything which requires a user input a [label must be provided](https://design-system.service.gov.uk/components/text-input/#how-it-works).

Every label should describe what is expected in the input. Keep labels simple at first and only include hint text or additional instructions if your user research shows there is a need for it. You can [read more about hint text in the GOV.UK Design System](https://design-system.service.gov.uk/components/text-input/#hint-text).

There are some examples of inputs without labels such as the Search field at the top of the GOV.UK site. These will still need descriptive labels, even if they’re not visible on the screen.

For example:
<label for="search" class="govuk-visually-hidden">
  Search DWP
</label>
<input type="search" id="search" class="govuk-input" ... />
