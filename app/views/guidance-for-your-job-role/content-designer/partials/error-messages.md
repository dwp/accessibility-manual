### Error messages

[WCAG 2.1 success criterion 3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html) states that if a user does not input information correctly, you should help them with a suggestion or error message as long as it it does not jeopardize security.

For example, if a user does not fill in their name correctly, you should create an error message to help them, which reads: “Enter your name”.

If there are security considerations, you still need to provide an error message but it can be more vague. An example of this might be an email and password combination.

For example, if somebody was trying to gain access to somebody else's account, by only telling them they got the password incorrect, you are also telling them that they actually got the email address correct. So for situations like this the error message might instead read: "Enter both your email and password correctly."

You should work with a Frontend Developer and a QA Tester to work out what error messages you might need to write content for.

You can read more about error messages in the [GOV.UK Design System](https://design-system.service.gov.uk/components/error-message/).
