# {Announcements and alerts: }Technical considerations

## Validation errors
When a validation error has occured, there are 3 things which are important:
1. Making it immediately obvious there is an error somewhere on the page
2. Making it clear which field is causing the error
3. Making it easy to understand how to fix the error

Doing validation in an accessible way can be quite complex. It involves changing page titles, adding clear error messages and summarising them. It can also involve moving the keyboard focus. 

You should follow the guidance on the [help users to recover from validation errors pattern](https://design-system.service.gov.uk/patterns/validation/) in the GOVUK Design System.

If you're not using GOVUK Frontend, you should still follow the pattern, but some of the technical considerations are outlined below.


### Using the alert role
Your error summary should use the attribute `role="alert"` to make it announce to a screen reader as soon as it loads. The role of alert is reserved for important time-sensitive information.

If you're using GOVUK Frontend, the error summary will automatically have the role. But you will need to add it manually if you're creating your own.

For example:
```html
<div id="error-summary" tabindex="-1" role="alert">
  <h2>There is a problem</h2>
  <a href="#postcode-input" class="error-summary__link">
    Enter a postcode, like AA1 1AA
  </a>
</div>
```

### Moving the keyboard focus
If you're using an error summary, it is one of the few times it is acceptable to hijack the keyboard focus. Moving the keyboard focus to the summary lets the user quickly interact with the error information without having to try and navigate to it or find it on the page. You can do this with Javascript provided your summary has a tabindex attribute.

Using `tabindex="-1"` will allow something to temporarily receive focus with Javascript, but will not allow you to continue to navigate to it using the keyboard. This is important because the summary itself is not interactive, the user just needs to know the summary is there once, and then they can interact with the links inside it.

For example:
```html
<div id="error-summary" tabindex="-1" role="alert">
  <h2>There is a problem</h2>
  <a href="#postcode-input" class="error-summary__link">
    Enter a postcode, like AA1 1AA
  </a>
</div>
```
```js
document.addEventListener("DOMContentLoaded", function() { 
    document.querySelector('#error-summary').focus()
})
```

### Identifying and fixing errors
You should add a visual indicator to whichever field is causing the error. This should be something high contrast and visually different such as a border. It is usually good practice to also highlight it in red, but colour cannot be the only way to identify the error incase somebody is colour blind.

You will need to add a clear error message which explains how to fix the problem. It is also good practice to prepend the label content with the word 'error', so that when the screen reader gets to that field, it is clear this is a field with an error. In the GOVUK error message component, the word 'error' is visually hidden but you may wish to have it visible depending on how you style your component.

For example:
```html
<div class="form-control form-control--error">
  <label for="postcode" class="form-control__label">
    Error: Postcode
    <span class="form-control__label form-control__label--error">
      Enter a postcode, like AA11AA
    </span>
  </label>
</div>
```

## Collapsable sections
For anything which can be expanded or collapsed, there are 3 things which are important:

1. The controls use the right elements and work with a keyboard
2. The controls are clearly labelled
3. The state of the section is announced when it is toggled

In the following example, we will use a button as the control, a div as the section, and we will add some additional attributes to make it accessible. 

We will use `aria-controls` on the button to make it clear which content it is connected to. We will use `aria-expanded` on the button to state whether it is in an expanded or collapsed state. Finally, we will use `aria-labelledby` on the content to make it clear which control it is connected to.

We then use Javascript to switch these attributes and toggle the content in section one between `display:none` and `display:block`.

```html
<button id="section-1-control" aria-controls="section-1-content" aria-expanded="false">
  <span id="section-1-title">Section 1</span>
  <span id="section-1-control-label">: Show this section</span>
</button>
<div id="section-1-content" aria-labelledby="section-1-title" style="display:none">
  <p>
    This is the content for section 1
  </p>
</div>
```
```js
const control = document.querySelector('#section-1-control')
const controlLabel = document.querySelector('#section-1-control-label')
const sectionContent = document.querySelector('#section-1-content')

control.onclick = function () {
  const expanded = this.getAttribute('aria-expanded')
  if (expanded === 'false') {
    this.setAttribute('aria-expanded', 'true')
  	sectionContent.style.display = 'block'
  	controlLabel.innerHTML = ': Hide this section'
  } else {
    this.setAttribute('aria-expanded', 'false')
    sectionContent.style.display = 'none'
    controlLabel.innerHTML = ': Show this section'
  }
}
```

## Notifications and pop-ups

### Notifications
The [GOVUK notification banner component](https://design-system.service.gov.uk/components/notification-banner/) has detailed guidance on best practice for notifications.

If you are making your own, you may need them to be announced to a screen reader the same way as errors if it is important the user is made aware of them in a timely manner.

If this is the case, you should use the `role="alert"` attribute.

For example:
```html
<div class="notification-banner" role="alert">
  <p>Your document has finished uploading</p>
</div>
```

### Popups
Popups can be particularly tricky, and in most cases should probably be avoided due to their complexity. 

You will need to consider:
- the role you give the popup
- the aria attributes you use for the content
- the aria attributes you use for the control
- where you move the focus to when the pop-up opens
- where you move the focus to when the pop-up closes
- how you contain the focus inside the pop-up

In the following example, the button to 'view additional information' is using `aria-haspopup="dialog"` to let the screen reader know it's going to control a pop-up.

The pop-up itself is using `role="dialog"`, `aria-describedby`, `aria-labelledby` and `open`. These will all help the screen reader to work out what the pop-up is, how it should be described and the state it is currently in.

When the modal is opened, the interactive elements on the page behind it are removed from the tabindex to contain the focus inside the modal, and when the modal is closed the tabindex is restored.

```html
<button id="popup-control" aria-haspopup="dialog">
  View additional information
</button>

<div id="popup" role="dialog" aria-labelledby="title" aria-describedby="description" open="false">
  <h2 id="title">This is a pop-up</h2>
  <p id="description">A pop-up may also be known as a dialog or modal</p>
  <button id="close">Close pop-up</button>
</div>
```
```js
const focusableAll = document.querySelectorAll('button:not([disabled])')
const close = document.querySelector('#close')
const popupControl = document.querySelector('#popup-control')
const popup = document.querySelector('#popup')

popupControl.onclick = function () {
  popup.style = 'display:block'
  popup.setAttribute('open', 'true')
  focusableAll.forEach(function (element) {
    element.setAttribute('tabindex', '-1')
  })
  close.setAttribute('tabindex', '0')
  close.focus()
}

close.onclick = function () {
  popup.style = 'display:none'
  popup.setAttribute('open', 'false')
  focusableAll.forEach(function (element) {
    element.setAttribute('tabindex', '0')
  })
  popupControl.focus()
}

```
```css
div[role='dialog'] {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  background: grey;
  padding: 20px;
  display: none;
}
```