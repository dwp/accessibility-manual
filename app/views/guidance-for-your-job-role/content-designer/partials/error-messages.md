### Error messages

[WCAG 3.3.3 error](https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion) suggestion states that if an input error is detected then suggestions are made to the user provided it does not jeopardise security.

For example, a user does not fill in their name. We should create an error message which reads: "Enter your name".

However, if there are security considerations, then we still need to provide an error message but it can be more vague. An example of this might be an email and password combination.

For example, if somebody was trying to gain access to somebody else's account, by only telling them they got the password incorrect, you are also telling them that they actually got the email address correct. So for situations like this the error message might instead read: "Enter both your email and password correctly."

You should work with a Frontend Developer and a QA Tester to work out what error messages you might need to write content for.

You can [read more about error messages in the GOV.UK Design System](https://design-system.service.gov.uk/components/error-message/).
