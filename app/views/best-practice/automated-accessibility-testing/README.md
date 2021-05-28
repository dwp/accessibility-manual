# {Accessibility testing:} Automated testing

Automated accessibility testing is an easy way to find obvious errors. It should always be a check you do against anything you build, but it is not enough to guarantee accessibility.

It is recommended to use multiple automated checkers, as each one might find errors others do not, and as they're really quick to run it doesn't add much overhead.

A [GDS audit of automated tools](https://alphagov.github.io/accessibility-tool-audit/) found that out of 142 known accessibility issues, the best tools only found around 30 to 40 percent. So it is important to make sure you do [manual testing](/best-practice/manual-accessibility-testing) also.

## Continuous integration

As part of your continuous integration (CI) pipeline, you should include automated accessibility testing. It won't find everything, but it may stop you from deploying code which has introduced accessibility errors into your service.

There are a few tools which do this but we recommend using [axe-core](https://github.com/dequelabs/axe-core).

## Using browser plugins

Every time you create or edit a page, you should run a browser plugin before doing any manual testing. 

It's recommended that you use a few plugins. Because it's so quick there is very little overhead to testing with several. 

A combination of [Axe](https://www.deque.com/axe/), [Wave](https://wave.webaim.org/) and [Accessibility Insights](https://accessibilityinsights.io/) will find a good range of common mistakes.
