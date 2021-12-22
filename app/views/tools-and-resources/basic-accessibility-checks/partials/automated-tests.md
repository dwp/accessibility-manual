WCAG criteria:
: Various
Things to check:
: [ARC Toolkit](/best-practice/automated-testing-using-browser-plugins/#arc-toolkit)
: [Axe Devtools](/best-practice/automated-testing-using-browser-plugins/#axe-devtools)
: [Wave](/best-practice/automated-testing-using-browser-plugins/#wave)
Guidance and examples:
: How to use the ARC Toolkit
: How to use Axe DevTools
: How to use Wave

You must use automated tools to spot any common mistakes.

If automated tools are flagging issues, it's usually a pretty good sign your application is not ready to be thoroughly audited for accessibility.

There are a few cases where you might get false positives. For example your skip-link may not be contained by a landmark. On a page which meets WCAG 2.1 to the standard of AA, it is very unlikely an automated tool would find more than 5 separate issues.