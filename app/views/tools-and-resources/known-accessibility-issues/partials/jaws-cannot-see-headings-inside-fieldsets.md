## JAWs cannot see headings inside fieldsets

There is where JAWs does not read out headings which are inside fieldset tags.

This affects most GOV.UK services using the 1 thing per page approach as components such as radios and checkboxes nest the H1 inside the legend tag.

The issue is with JAWs and not with the GOV.UK Design System components. The issue has been raised with Freedom Scientific who would be responsible for fixing it.

The issue only seems to happen in the Internet Explorer browser, so it could be a good idea to recommend your users use a different browser in your Accessibility Statement.

You can read more about this issue:  
[Github issue about JAWs not reading out headings](https://github.com/freedomscientific/vfo-standards-support/issues/100).
