### Conditionally revealing content

Conditionally revealing content has been possible for a while. But in September 2020 GDS found that sometimes the expanded content was not read out to screen readers. You can [read more about the problem with conditionally revealing content](https://design-system.service.gov.uk/accessibility/#non-compliance-with-the-accessibility-regulations) on the GOV.UK Design System Accessibility Statement.

When conditionally revealing content, do not nest multiple reveals inside one another. This can very quickly become disorientating. If you must use conditional reveals, keep them simple like the example given on the [Radio Button Component](https://design-system.service.gov.uk/components/radios/) .

Conditional revealing content can also create scenarios where the heading of the page loses it's context. If you must use conditional reveals make sure that the fields all still make sense in the context of the H1.
