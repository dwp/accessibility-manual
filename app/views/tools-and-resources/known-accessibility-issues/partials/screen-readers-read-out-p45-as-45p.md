## Screen readers read out P45 as 45p

When referring to the tax document known as a P45, a screen reader will sometimes read out 45p.

We found that the language settings of the device caused the issue. If the device is set to USA English then it read out 'P45'. But if the device was set to British English, the screen reader assumed 'P45' to be currency and instead read out 45p.

We found that we could fix the issue for JAWs by adding a visually hidden non- breaking space. However NVDA would still read out 45p. For example:

```html
~~P<span class="govuk-visually-hidden">&nbsp;</span>45
```

We recommend adding the visually hidden non-breaking space and adding the following paragraph to your accessibility statement:

We know some screen readers will read out the tax form known as a Pay as you earn 45 as 45p. This happens if your language is set to British English and your screen reader assumes it is money.
