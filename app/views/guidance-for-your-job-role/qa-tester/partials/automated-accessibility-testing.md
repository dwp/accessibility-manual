### Automated accessibility testing

Automated accessibility tests will very quickly help you identify common fails. The will not find everything, we know they will actually find less than 50% of all known issues, but they will give you a good foundation to start your manual testing from. [Read more about the limitations of automated accessibility testing tools](https://alphagov.github.io/accessibility-tool-audit/).

When doing automated accessibility testing, you can either run browser plugins against each page or you can build the tools into your deployment process. In DWP the standard approach is to build [axe-core](https://github.com/dequelabs/axe-core) into pipeline, and to run the [Wave browser plugin against each page](https://wave.webaim.org/extension/).

The DWP Engineering Confluence space has scripts available for configuring axe-core.
