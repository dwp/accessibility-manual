## ARIA attributes not allowed on conditional reveals

When running automated tests, if the page contains conditional reveals then Axe may raise an error which reads: 
`ARIA attribute is not allowed: aria-expanded="false"` 

The issue happens because the aria-expanded attribute is not allowed on input tags, although W3C Validator and SiteImprove do not flag it as a HTML error.

Research conducted by GDS along with the Digital Accessibility Centre has shown that, as long as your reveals contain no more than a single input, they shouldn't cause many issues. In this case the Axe error can be disregarded.

Related GitHub issues
- [Github issue about GDS removing conditional reveals as an issue](https://github.com/alphagov/govuk-design-system-backlog/issues/37#issuecomment-871527458)
- [Github issue about Axe errors for aria-expanded](https://github.com/alphagov/govuk-frontend/issues/979)
- [Github issue about conditional reveals not being available to assistive technology](https://github.com/alphagov/govuk-frontend/issues/1972)
