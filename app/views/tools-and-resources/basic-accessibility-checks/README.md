# Basic accessibility checks

WCAG 2.1 covers a lot of criteria and a lot of scenarios. Because it is a full standard, it has to cover every eventuality. To be able to say your service is fully compliant, you will need to check everything. There is no getting around it.

However, when testing we find most WCAG failures fall under the same 15 to 20 criteria. So, we've made a checklist of our top 10 things to test. We think this should cover a lot of the serious accessibility barriers people face.

To make this checklist, we combined the common failures found by 8 different accessibility auditors along with the findings from the [Accessibility monitoring of public sector websites and mobile apps 2020-2021 corporate report](https://www.gov.uk/government/publications/accessibility-monitoring-of-public-sector-websites-and-mobile-apps-2020-2021/accessibility-monitoring-of-public-sector-websites-and-mobile-apps-2020-2021).

We grouped the tests into a logical order based on how easy the tests are to execute, and how much effort they will take to fix.

<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">
    !
  </span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-warning-text__assistive">
      Warning
    </span>
    This intent of this basic checklist is to cover the most common WCAG failures. Completing this checklist will not guarantee your service is fully compliant with WCAG 2.1.
  </strong>
</div>

<div class="govuk-inset-text">

  [Download the basic accessibility checklist as Open Document Text format (ODT)](/odt).

</div>

## 1. Responsive design
WCAG criteria:
: [1.4.4 Resize text]({wcagify})
: [1.4.10 Reflow]({wcagify})
: [1.3.4 Orientation]({wcagify})
Checklist:  
: Font size scales without breaking the page layout
: Font size will scale up to “large” and still be clear
: Font size will scale up to “very large” and still be clear
: No horizontal scrolling on banned elements at 320px
: All information available in portrait and landscape
Guidance:
: [{responsive design: }How to test](/tools-and-resources/basic-accessibility-checks/1-responsive-design-how-to-test)
: [{responsive design: }Impact on users](/tools-and-resources/basic-accessibility-checks/1-responsive-design-impact-on-users)
: [{responsive design: }Technical considerations](/tools-and-resources/basic-accessibility-checks/1-responsive-design-technical-considerations)


## 2. Automated tools
WCAG criteria:
: [4.1.1 Parsing]({wcagify})
: Various others
Checklist:
: HTML is valid
: ARC Toolkit used
: Axe Devtools used
: Wave used
Guidance:
: [{Automated tools :}How to test](/tools-and-resources/basic-accessibility-checks/2-automated-tools-how-to-test)
: [{Automated tools: }Impact on users](/tools-and-resources/basic-accessibility-checks/2-automated-tools-impact-on-users)
: [{Automated tools: }Technical considerations](/tools-and-resources/basic-accessibility-checks/2-automated-tools-technical-considerations)

## 3. Keyboard accessibility
WCAG criteria:
: [2.1.1 Keyboard]({wcagify})
: [2.1.2 No Keyboard Trap]({wcagify})
: [2.4.1 Bypass Blocks]({wcagify})
: [2.4.3 Focus Order]({wcagify})
: [2.4.7 Focus Visible]({wcagify})
: [4.1.2 Name, Role, Value]({wcagify})
Checklist:
: All interactions work using a keyboard
: Focus is never trapped
: Focus order is logical
: Focus is always visible
: Focus is contained within modals and popups
: Page has is a working skip-link
Guidance:
: [{Keyboard accessibility :}How to test](/tools-and-resources/basic-accessibility-checks/3-keyboard-accessibility-how-to-test)
: [{Keyboard accessibility: }Impact on users](/tools-and-resources/basic-accessibility-checks/3-keyboard-accessibility-impact-on-users)
: [{Keyboard accessibility: }Technical considerations](/tools-and-resources/basic-accessibility-checks/3-keyboard-accessibility-technical-considerations)

## 4. Headings and labels
WCAG criteria:
: [1.3.1 Info and Relationships]({wcagify})
: [2.4.6 Headings and Labels]({wcagify})
: [3.3.2 Labels or Instructions]({wcagify})
Checklist:
: Headings and labels are clear and descriptive
: Page has a H1, but not more than 1
: No heading levels have been skipped
: Tables are captioned, headed and marked up correctly
: All form fields have a label
Guidance:
: [{Headings and labels :}How to test](/tools-and-resources/basic-accessibility-checks/4-headings-and-labels-how-to-test)
: [{Headings and labels: }Impact on users](/tools-and-resources/basic-accessibility-checks/4-headings-and-labels-impact-on-users)
: [{Headings and labels: }Technical considerations](/tools-and-resources/basic-accessibility-checks/4-headings-and-labels-technical-considerations)

## 5. Page title
WCAG criteria: 
: [2.4.2 Page Titled]({wcagify})
Checklist: 
: Page title desribes the current page
: Page title describes the current website or service
Guidance:
: [{Page title :}How to test](/tools-and-resources/basic-accessibility-checks/5-page-title-how-to-test)
: [{Page title: }Impact on users](/tools-and-resources/basic-accessibility-checks/5-page-title-impact-on-users)
: [{Page title: }Technical considerations](/tools-and-resources/basic-accessibility-checks/5-page-title-technical-considerations)

## 6. Links and buttons
WCAG criteria:
: [2.4.4 Link Purpose (In Context)]({wcagify})
: [3.2.3 Consistent Navigation]({wcagify})
: [3.2.4 Consistent Identification]({wcagify})
: [4.1.2 Name, Role, Value]({wcagify})
Checklist:
: The purpose of each link and button is clear
: No broken or internal-only links
: Navigation menus on more than 1 page are in the same order
: Buttons on more than 1 page are labelled consistently
: Button icons have a text alternative
: Buttons and links use the correct tags or roles
Guidance:
: [{Links and buttons :}How to test](/tools-and-resources/basic-accessibility-checks/6-links-and-buttons-how-to-test)
: [{Links and buttons: }Impact on users](/tools-and-resources/basic-accessibility-checks/6-links-and-buttons-impact-on-users)
: [{Links and buttons: }Technical considerations](/tools-and-resources/basic-accessibility-checks/6-links-and-buttons-technical-considerations)

## 7. Colour contrast
WCAG criteria: 
: [1.4.3 Contrast (Minimum)]({wcagify})
: [1.4.11 Non-text Contrast]({wcagify})
Checklist: 
: Text larger than 18pt has a ratio of 3:1 or more
: Text larger than 14pt and bold has a ratio of 3:1 or more
: Text smaller than 18pt and not bold has a ratio of 4.5:1
: Non-text elements have a contrast ratio of 3:1
: Focus styles have a contrast ratio of 3:1
Guidance:
: [{Colour contrast :}How to test](/tools-and-resources/basic-accessibility-checks/7-colour-contrast-how-to-test)
: [{Colour contrast: }Impact on users](/tools-and-resources/basic-accessibility-checks/7-colour-contrast-impact-on-users)
: [{Colour contrast: }Technical considerations](/tools-and-resources/basic-accessibility-checks/7-colour-contrast-technical-considerations)

## 8. Images
WCAG criteria:
: [1.1.1 Non-text Content]({wcagify})
: [1.4.5 Images of text]({wcagify})
Checklist:
: Alt text for important images is clear and accurate
: Decorative images are hidden from screen readers
: No images of text are being used
Guidance:
: [{Images: }How to test](/tools-and-resources/basic-accessibility-checks/images-how-to-test)
: [{Images: }Impact on users](/tools-and-resources/basic-accessibility-checks/images-impact-on-users)
: [{Images: }Technical considerations](/tools-and-resources/basic-accessibility-checks/images-technical-considerations)

## 9. Announcements and alerts
WCAG criteria:
: [3.3.1 Error Identification]({wcagify})
: [3.3.3 Error Suggestion]({wcagify})
: [4.1.3 Status Messages]({wcagify})
Checklist:
: Validation errors are announced to screen readers
: Validation are explained
: Expanded or collapsed sections are announced to screen readers
: Notification messages are announced to screen readers
: Popups are announced to screen readers
Guidance:
: [{Announcements and alerts :}How to test](/tools-and-resources/basic-accessibility-checks/announcements-and-alerts-how-to-test)
: [{Announcements and alerts: }Impact on users](/tools-and-resources/basic-accessibility-checks/announcements-and-alerts-impact-on-users)
: [{Announcements and alerts: }Technical considerations](/tools-and-resources/basic-accessibility-checks/announcements-and-alerts-technical-considerations)

## 10. Session timeouts
WCAG criteria:
: [2.2.1 Timing Adjustable]({wcagify})
Checklist:
: There is a way to extend session timeouts without losing data
Guidance:
: [{Session timeouts :}How to test](/tools-and-resources/basic-accessibility-checks/session-timeouts-how-to-test)
: [{Session timeouts: }Impact on users](/tools-and-resources/basic-accessibility-checks/session-timeouts-impact-on-users)
: [{Session timeouts: }Technical considerations](/tools-and-resources/basic-accessibility-checks/session-timeouts-technical-considerations)
