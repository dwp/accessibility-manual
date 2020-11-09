# WCAG AA and AAA

With the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) there are different levels of compliance from A (Lowest), AA, and AAA (Highest).

Some of the impacts of making your service AAA will involve changing how a user interacts with your service and will go against security and GDS patterns, however, some will be fulfilled by default.

We have a [legal requirement to meet AA](/accessibility-law/accessibility-regulations-vs-the-govuk-service-standard) however to meet AAA we have to fully meet the standard.

<blockquote class="govuk-inset-text">
It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

[Understanding Conformance](https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels)
</blockquote>

## AAA differences

There is a number of additional elements to the spec that we need to consider, some are not relevant, some are covered by doing other parts of the spec.

### Formats

Some of the AAA specs relate to additional formats such as [1.2.6 Sign Language (Prerecorded)](https://www.w3.org/TR/WCAG21/#sign-language-prerecorded), [1.2.7 Extended Audio Description](https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded), [1.2.8 Media Alternative](https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded), [1.2.9 Audio-only](https://www.w3.org/TR/WCAG21/#audio-only-live), [1.4.7 Low or No Background Audio](https://www.w3.org/TR/WCAG21/#low-or-no-background-audio) and [1.4.9 Images of Text](https://www.w3.org/TR/WCAG21/#images-of-text-no-exception) that may not be relevant to your service, however, if you are providing video you will want to consider how these are consumed.

### Content

Similar to this there is guidaince for some content [2.4.9 Link Purpose](https://www.w3.org/TR/WCAG21/#link-purpose-link-only), [3.1.3 Unusual Words](https://www.w3.org/TR/WCAG21/#unusual-words), [3.1.4 Abbreviations](https://www.w3.org/TR/WCAG21/#abbreviations), [3.1.5 Reading Level](https://www.w3.org/TR/WCAG21/#reading-level) and [3.1.6 Pronunciation](https://www.w3.org/TR/WCAG21/#pronunciation) these would be something that are considered good practice.

### Edge considerations

There are somethings that may not be relvant due to how we build services [2.2.3 No Timing](https://www.w3.org/TR/WCAG21/#interruptions), [2.2.4 Interruptions](https://www.w3.org/TR/WCAG21/#interruptions), [2.3.2 Three Flashes](https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold) and [2.3.3 Animation from Interactions](https://www.w3.org/TR/WCAG21/#animation-from-interactions).

### Semantics

Some of the specs should also be covered by making sure we have semantic elements such as [1.3.6 Identify Purpose](https://www.w3.org/TR/WCAG21/#identify-purpose),  [2.4.10 Section Headings](https://www.w3.org/TR/WCAG21/#link-purpose-link-only) and [2.5.6 Concurrent Input Mechanisms](https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms).

### GDS Changes

Some elements of AAA may require varation from the [GDS design system](https://design-system.service.gov.uk/) such as [1.4.6 Contrast](https://www.w3.org/TR/WCAG21/#contrast-enhanced) and [2.5.5 Target Size](https://www.w3.org/TR/WCAG21/#target-size).

## Considerations

We also have to make some considerations about how we may have to change how the service is built and designed.

### 2.2.6 Timeouts

<div class="govuk-inset-text">
Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.
</div>

By meeting [2.2.1 Timing Adjustable](https://www.w3.org/TR/WCAG21/#timing-adjustable) allowing the user to Extend the [session time out](https://github.com/alphagov/govuk-design-system-backlog/issues/104) we should already meet this consideration.

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

A good example of this is when we open a link in a new window, at all times the user should be given context o what we are doing.

### 3.3.5 Help
<div class="govuk-inset-text">
Context-sensitive help is available.
</div>

For this, we already provide text hints on the format, and error messages for when a user has made an error, we should also be mindful of being flexible in what data we accept.

### 3.3.6 Error Prevention

<div class="govuk-inset-text">
A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.
</div>

There are three ways to satisfy this, using the [check your answers](https://design-system.service.gov.uk/patterns/check-answers/ pattern) fulfills this.

