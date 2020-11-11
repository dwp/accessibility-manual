# WCAG AA and AAA

With the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) there are different levels of compliance from A (Lowest), AA, and AAA (Highest).

Some of the impacts of making your service AAA will involve changing how a user interacts with your service and will go against security and GDS patterns, however, some will be fulfilled by default.

We have a [legal requirement to meet AA](/accessibility-law/accessibility-regulations-vs-the-govuk-service-standard), however to meet AAA we have to meet every single one of the WCAG 2.1 criteria.

<blockquote class="govuk-inset-text">
It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

[Understanding Conformance](https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels)
</blockquote>

## AAA differences

There is a number of additional elements in standard that we need to consider, some are not relevant, some are covered by doing other parts of the standard.

### Formats

Some of the AAA criteria relate to additional formats that may not be relevant to your service, however, if you are providing video you will want to consider how these are consumed.

AAA criteria relating to video:
- [1.2.6 Sign Language (Prerecorded)](https://www.w3.org/TR/WCAG21/#sign-language-prerecorded)
- [1.2.7 Extended Audio Description](https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded)
- [1.2.8 Media Alternative](https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded)
- [1.2.9 Audio-only](https://www.w3.org/TR/WCAG21/#audio-only-live)
- [1.4.7 Low or No Background Audio](https://www.w3.org/TR/WCAG21/#low-or-no-background-audio)
- [1.4.9 Images of Text](https://www.w3.org/TR/WCAG21/#images-of-text-no-exception)

### Content

There are a number criteria relating purely to content. Because the Service Standard says we should aim for a reading age of 9, you might meet some of these by default:
- [2.4.9 Link Purpose](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
- [3.1.3 Unusual Words](https://www.w3.org/TR/WCAG21/#unusual-words)
- [3.1.4 Abbreviations](https://www.w3.org/TR/WCAG21/#abbreviations)
- [3.1.5 Reading Level](https://www.w3.org/TR/WCAG21/#reading-level)
- [3.1.6 Pronunciation](https://www.w3.org/TR/WCAG21/#pronunciation)

### Edge considerations

Due to the way we build services in Government, there are some criteria which we probably can't meet, and some which will probably never be relevant:
- [2.2.3 No Timing](https://www.w3.org/TR/WCAG21/#interruptions)
- [2.2.4 Interruptions](https://www.w3.org/TR/WCAG21/#interruptions)
- [2.3.2 Three Flashes](https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold)
- [2.3.3 Animation from Interactions](https://www.w3.org/TR/WCAG21/#animation-from-interactions)

### Semantics

Some of the criteria should be covered by making sure we code our services to a high standard and everything is valid:
- [1.3.6 Identify Purpose](https://www.w3.org/TR/WCAG21/#identify-purpose)
- [2.4.10 Section Headings](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
- [2.5.6 Concurrent Input Mechanisms](https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms)

### GDS Changes

Some elements of AAA would likely require you to deviate from the [GDS design system](https://design-system.service.gov.uk/) styles, such as:
- [1.4.6 Contrast](https://www.w3.org/TR/WCAG21/#contrast-enhanced)
- [2.5.5 Target Size](https://www.w3.org/TR/WCAG21/#target-size)

## Considerations

Some criteria would need consideration, as they may change how the service is built and designed.

### 2.2.6 Timeouts

<div class="govuk-inset-text">
  Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.
</div>

As part of [2.2.1 Timing adjustable](https://www.w3.org/TR/WCAG21/#timing-adjustable) we need to allow the user to do one of the following: 
- extend the [session time out](https://github.com/alphagov/govuk-design-system-backlog/issues/104) at least 10 times
- adjust the session timeout to 10 times the original length before encountering it
- turn off session timeout before encountering it
- set the default session timeout to be at least 20 hours

To meet the AAA [WCAG 2.1 criterion - 2.2.6 Timeouts](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=226#timeouts) you need to include a warning on the start page that the session will timeout after the duration defined in the timeout itself.

If you meet the AAA criterion by providing a warning, you still need to meet the AA criterion for Timing adjustable. 

### 1.4.8 Visual Presentation

<div class="govuk-inset-text">
  Foreground and background colors can be selected by the user.
</div>

Some of the [1.4.8 Visual Presentation](https://www.w3.org/TR/WCAG21/#visual-presentation) specification will already have been met, such as allowing the user to zoom, however, to meet the AAA for this we would also to provide options for the user to customize the service.

### 2.2.5 Re-authenticating

<div class="govuk-inset-text">
  When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.
</div>

Often services do not require you to authenticate, but if they do this is a consideration about how a user might save their data before submission. 

### 2.4.8 Location

<div class="govuk-inset-text">
  Information about the user's location within a set of Web pages is available.
</div>

The suggestion for this was 'A breadcrumb trail', however, when this is a multiple page service we'd need to give the user an idea of where they are in that process.

This may be better suited to a [task list pattern](https://design-system.service.gov.uk/patterns/task-list-pages/) approach.

### 3.2.5 Change on Request

<div class="govuk-inset-text">
  Changes of context are initiated only by user request or a mechanism is available to turn off such changes.
</div>

For example, if you have a content which is updated in realtime such as a news feed, then you would need to provide the user with a way to turn off the automatic updates and provide a way for them to update the feed in their own time.

### 3.3.5 Help
<div class="govuk-inset-text">
  Context-sensitive help is available.
</div>

For this, we already provide text hints on the format, and error messages for when a user has made an error, we should also be mindful of being flexible in what data we accept.

An assisted digital route might also cover this criterion.

### 3.3.6 Error Prevention

<div class="govuk-inset-text">
  A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.
</div>

There are three ways to satisfy this:
- allow the user to reverse their submission. For example, recall their application after it has been sent.
- provide the user with input errors and give the user an opportunity to correct any mistakes. This method won't usually work for personal data as their isn't anything to check it against.
- allow the user to confirm their information before they send it. For example, using the [GOV.UK check your answers pattern](https://design-system.service.gov.uk/patterns/check-answers/).
