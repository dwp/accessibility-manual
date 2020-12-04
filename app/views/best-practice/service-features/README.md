# Service features

There is some baseline functionality you will need to add to your service to meet the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) AA standard.

This doesn't cover fundamentals such [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) as [1.4.3 Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) but is more to highlight features that will need to be included.

## 2.2.1 Timing Adjustable (A)

There are several ways we can meet this criteria.

Most commonly we will use a [session time out](https://github.com/alphagov/govuk-design-system-backlog/issues/104) pattern to allow the user to extend.

This balances security with usability.

We can also meet this by making our session longer than 20 hours, however, we need to apply this in the context of the service.

There may be cases where a real-time event such as two-factor authentication where a strike time limit is appropriate.

[Full success criterion for 2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)

## 3.3.4 Error Prevention (Legal, Financial, Data)

Following good practices for development means we should be validating the user input page by page and giving feedback to the user on how to correct any issues such as format using the [error messages](https://design-system.service.gov.uk/components/error-message/) pattern.

However, the data can pass validation and still not be correct so we still need to give the user the option to check it.

We recommend using the [check answers](https://design-system.service.gov.uk/patterns/check-answers/) pattern to give the user the opportunity to review and correct what they have inputted.

When designing a very large transaction with multiple sections, it may help to include a check answers page at the end of each section.

[Full success criterion for 3.3.4: Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html)