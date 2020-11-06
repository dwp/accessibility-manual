## GOV.UK conditional reveals are non-compliant

The radio button component and the checkbox component in the GOV.UK Design System have been found to have issues which make them non-compliant.

Users are not always notified when conditionally revealed content is expanded or collapsed. This fails [WCAG 4.1.2 - Name, Role, Value](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value)].

Until the issue is fixed, it is not recommended to use conditional reveals. They are also often more difficult for users than a simple 1 thing per page approach anyway. So consider if they're actually needed for your service at all.

You can read more about this issue: 
[Github issue about conditional reveals](https://github.com/alphagov/govuk-frontend/issues/1972)
