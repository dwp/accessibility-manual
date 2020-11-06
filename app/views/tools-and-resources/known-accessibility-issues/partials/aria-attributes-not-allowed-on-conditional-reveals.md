## ARIA attributes not allowed on conditional reveals

When running automated tests, if the page contains conditional reveals then Axe will raise an error which reads: 
`ARIA attribute is not allowed: aria-expanded="false"` 

The issue happens because the aria-expanded attribute is not allowed on input tags, although W3C Validator and SiteImprove do not flag it as a HTML error.

As of September 2020, it was decided by GDS that the current implementation of the conditional reveal component is non-compliant with WCAG 4.1.2 Name, Role, Value, due to the fact that some screenreaders fail to announce when the content is expanded or collapsed.

Until the component is fixed, it is recommended that you don't use conditional reveals and instead display the conditional content on the next page.

You can read more about these issues:
- [Github issue about Axe errors](https://github.com/alphagov/govuk-frontend/issues/979)
- [Github issue about conditional reveals](https://github.com/alphagov/govuk-frontend/issues/1972)
