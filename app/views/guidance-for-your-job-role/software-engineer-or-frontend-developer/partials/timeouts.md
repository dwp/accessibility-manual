### Timeouts

If there are any time limits on the service, then they will need to be accessible. The most common timeout encountered on GOV.UK services is the session.

If you have any kind of timeout in your service then it must meet one of the following criteria in order to be considered compliant:

- the default time limit is set to at least 20 hours
- the user must be able to turn off the time limit completely before encountering it
- the user must be able to adjust the time limit before encountering it, to a minimum of 10 times the original time limit
- the user must be warned they are about to reach the time limit and be given at least 20 seconds to reset the timer. The user must be allowed to do reset the timer at least 10 times, and resetting the timer must not clear any of the information the user has already entered.

The only exceptions are when the time limit is in real-time, such as an auction which ends at 5pm. Or, if the time limit is essential such as booking tickets where the tickets can only be placed on hold a reasonable amount of time.

You should use the [Manage a session timeout pattern](https://design-system.dwp.gov.uk/patterns/manage-a-session-timeout) from the DWP Design System.