# {Accessibility tools:} Automated testing

Automated accessibility testing is an easy way to find obvious errors. It should always be a check you do against anything you build, but it is not enough to guarantee accessibility.

It is recommended to use multiple automated checkers, as each one might find errors others do not, and as they're really quick to run it doesn't add much overhead.

A [GDS audit of automated tools](https://alphagov.github.io/accessibility-tool-audit/) found that out of 142 known accessibility issues, the best tools only found around 30 to 40 percent. So it is important to make sure you do [manual testing](/best-practice/manual-accessibility-testing) also.

You can [read more on how to do accessibility testing](/best-practice/how-to-do-accessibility-testing).

{% include './partials/html-validator.md' %}
{% include './partials/w3c-markup-validation-service.md' %}
{% include './partials/pa11y.md' %}
{% include './partials/axe-core.md' %}
{% include './partials/arc-toolkit.md' %}
{% include './partials/axe-devtools.md' %}
{% include './partials/wave.md' %}
