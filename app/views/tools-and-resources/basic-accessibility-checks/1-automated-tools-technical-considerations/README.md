# {Automated tools: }Technical considerations

Once you have run an automated tool, you will be presented with some kind of results pane. You will then need to interpret these and use the information to make changes to the code.

## W3 Validator

### Errors

Errors should always be investigated and corrected. They usually indicate problems with your code, which could have an impact on users, with or without assistive technology.

To help you, W3 have compiled a [list of errors and what they mean](https://validator.w3.org/docs/errors.html).

### Warnings

Warnings should be checked but they may or may not need correcting. These highlight sections of code where manual checking is required.

## Axe DevTools

The errors identified will be listed by impact level. According to Deque, these are defined as:

### Critical

Results in blocked content for people with disabilities, and will definitely prevent them from accessing fundamental features or content. This type of issue puts your organization at risk. Prioritize fixing as soon as possible, within the week if possible. Remediation should be a top priority.

### Serious

Results in serious barriers for people with disabilities, and will partially or fully prevent them from accessing fundamental features or content. People relying on assistive technologies will experience significant frustration and may abandon essential workflows. Issues falling under this category are major problems, and remediation should be a priority.

### Moderate

Results in some difficulty for people with disabilities, but will generally not prevent them from accessing fundamental features or content. Users may be frustrated and abandon non-critical workflows. Prioritize fixing in this release, if there are no higher-priority issues. Will get in the way of compliance if not fixed.

### Minor

Considered to be a nuisance or an annoyance bug. Prioritize fixing if the fix only takes a few minutes and the developer is working on the same screen/feature at the same time, otherwise the issue should not be prioritized. Will still get in the way of compliance if not fixed.

## ARC Toolkit

### Visible/hidden

Visible items are things that are seen on the page, whereas hidden items are unseen to sighted users but will affect screenreaders and other assistive technologies that pick up programming information. 

### Instances

Instances are the number of times that item exists on a page. So, for example, there could be 10 images but most of them are correctly coded with alt text but 3 have no alt attribute.

### Errors

Errors must be corrected. The pane can be split into the results and helpful information on how to correct the error. This often links to further information which can help you to identify the code that requires amending.

### Warnings

Warnings require manual checking. Again, more information is given for each issue identified.

## WAVE

The results are shown in a pane on the left of the screen. By switching tabs, you can view detailed information about items identified, advice on how to correct each one and access to a contrast checker. 

### Errors

Errors must be fixed, as they are likely to cause barriers for disabled people and may result in assistive technology not being able to access the information correctly.

### Alerts

Alerts require manual checking. Not all alerts need to be fixed but you need to check with assistive technology or investigate the code further.
