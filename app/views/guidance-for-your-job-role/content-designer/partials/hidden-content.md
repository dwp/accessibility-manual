### Hidden content

Try to avoid hidden content. If content is needed it should be on the page. When we hide content away in collapsible components it's often because we haven't done a very good job of explaining something, or we are trying to put too much content on the page.

Both the [GOV.UK Accordion component](https://design-system.service.gov.uk/components/accordion/) and the [GOV.UK Details component](https://design-system.service.gov.uk/components/details/) have accessibility issues. There is also a lot of research that suggests if you hide content the user is likely to miss it completely.

The GOV.UK Details component is styled to look like a link, but it behaves like a button when using speech recognition software such as Dragon. If it looks like a link, it should be able to be programmatically determined to be one under [WCAG 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value).

The GOV.UK Accordion component also has the same issue with section headings. They look like links but behave like buttons. You can read more about the [accessibility issues with the Accordion component](https://design-system.service.gov.uk/accessibility/#non-compliance-with-the-accessibility-regulations) on the [GOV.UK Design System accessibility statement](https://design-system.service.gov.uk/accessibility/).
