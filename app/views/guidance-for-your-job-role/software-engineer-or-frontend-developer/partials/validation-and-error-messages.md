### Validation and error messages

Validation might be done in the frontend, in the back-end, or both. There are accessibility considerations for any kind of validation.

#### Real time validation

It is recommended that forms on a page are only validated once the user submits the form. Real-time validation can be annoying and inaccessible. It tends to throw errors before you've finished typing which can cause confusion.

If you do opt to do real-time validation, you will need to consider how that is announced to a screen reader. If you're appending error messages to the page using JavaScript then you will need to do additional work to make sure you have used the right aria tags to announce the errors to a screen reader user in a non-intrusive way.

### On submit validation

If we do in browser validation on submit, we need to make sure that the user is alerted to the error each time they click submit, and they are taken to the relevant error.

When we don't do this, often secondary form errors are not highlighted to screen reader users, as there is no change of state on the page. 

#### Dealing with user input

If you know what you're expecting, it can be tempting to lock down the fields. But you should not use limitations like a maxlength attribute. These can cause difficulties for people using voice recognition software such as Dragon.

When using voice recognition software, when the user pauses for breath it can automatically add a space. It is much more accessible to tell the user there is a character limit in the hint text, but don't actually limit the field. Then you can remove the whitespace and validate what was actually inputted once the form is submitted.

<div class="govuk-inset-text">

For example, if you were trying to validate a National Insurance number you would use the following steps:

1. allow the user to enter more than 9 characters
2. allow the user to submit the form
3. remove whitespaces, hyphens etc, and convert to uppercase
4. check it is a valid National Insurance number
5. accept the data as valid or reload the page with errors

This way we aren't burdening the user with getting everything perfect. We know assistive technologies can add spaces, and we know some people won't use capital letters, so we can do the hard work to make it simple.

</div>

#### Do not add random database rules

When analysing database schema, it is quite common to find character limits and rules which do not represent real world scenarios. Making assumptions about how long a persons name should be, or not allowing characters with accents or hyphens can quickly make things inaccessible.

Many assistive technologies allow people to create their own dictionaries. These are words or phrases that are common to the user but not to the native language. Their name is one of the things they will most likely store. We should not be telling people they entered their name wrong, and we should not be creating barriers for assistive technology by forcing the user to format their name in a way which fits the rules we've made up.

#### Error messages

Whenever a validation error is detected, you must inform the user that there is an error, and you must make it clear how to fix the error.

The standard way to do this in Government is to use the following patterns and components in the GOV.UK Design System.

- [GOV.UK pattern for validation errors](https://design-system.service.gov.uk/patterns/validation/)
- [GOV.UK Error summary component](https://design-system.service.gov.uk/components/error-summary/)
- [GOV.UK Error messages components](https://design-system.service.gov.uk/components/error-message/)

It is not enough to just tell the user there is an error somewhere. You must make it obvious to them which fields are causing the error and clearly explain what they must do to fix it.

#### Error pages

Error pages are different to validation errors. These are pages your user might see when something goes wrong with the service on a technical level rather than something the user has entered incorrectly.

These errors are called server errors or HTTP status codes and you must consider what you will show the user if one of them occurs. You should not just relay the code to the user because they will not understand what has gone wrong.

For example, if the user tries to navigate to a step in a journey several days after they've submitted an application, do not just show them a page which says "401: Unauthorised" or "Session expired". Instead, you could explain to the user why they cannot start on this page, or redirect them back to the start page of the journey.
