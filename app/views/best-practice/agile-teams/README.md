# Agile teams

If you're working in an agile team, every release must be accessibility tested. 

Accessibility testing must involve automated testing, manual testing and usability testing with assistive technologies.

There are best practices for [automated accessibility testing](/best-practice/automated-accessibility-testing) and [manual accessibility testing](/best-practice/manual-accessibility-testing) in this manual.

The Public Sector Bodies Accessibility Regulations will apply to anything you release into Public Beta or Live. 

## Discovery

In Discovery, you should be finding out what your users need.

Even though the accessibility regulations may not apply at this stage, the Equality Act 2010 states we cannot discriminate against anybody with a disability. So, although you don't have to do any technical accessibility work, you still need to include people with impairments in your user research. You need to understand how any products you build may have an impact on them and what additional needs they may have. 

You cannot build a service which works for everybody if you only include and design for people who don't have impairments.

You can use the [GOV.UK Accessibility Personas](https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles) in the early phases of discovery to start considering how users with impairments might be impacted.

## Alpha

In Alpha, you shouldn't be building anything except prototypes. But this doesn't mean you shouldn't consider accessibility. When you get to the end of Alpha, you need to have a good understanding of what it is you're going to build and how you're going to make it accessible. 

In Alpha, you should [focus on testing your riskiest assumptions](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works#focus-on-testing-your-riskiest-assumptions). You should take that approach with accessibility too. That means you don't need to test in Alpha with every single access need, just the ones that are most risky for your service. 

For example, one of your assumptions could be "Users who use screen readers will be able to access the content". If your service exclusively uses design patterns which are tried and tested, that particular access need may not be risky. But if your service uses more unique interactions, it may be more risky and so this assumption would need to be tested in Alpha.

Start by working out your accessibility assumptions and which access needs would affect the use of your service the most. You could use the [accessibility posters made by the Home Office](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/) as a starting point. Next, rank each one of these in terms of their risk level. Finally, test those assumptions and iterate your design until your confident that the risk level has gone down.

You should use the [GOV.UK Design System](https://design-system.service.gov.uk/) and the [GOV.UK Prototyping Kit](https://github.com/alphagov/govuk-prototype-kit) to build and test your ideas. By using these two frameworks you will leverage a lot of best practices and research on accessibility automatically.

When conceptualising ideas, you can use the [GOV.UK Sketch Kit](https://github.com/dwp/sketch_wireframing_kit) to mock up screen designs and wire-frames.

## Private Beta

In Private Beta, you're only releasing your product to a small amount of users in a controlled environment. Often, people consider this another opportunity to de-prioritise accessibility. But the longer you put off the accessibility work the more of a bottleneck it will become and the more you will have to unpick at a later date.

In Private Beta, you should always include users which have impairments and use assistive technologies. By including these people earlier you will understand how to make your service accessible before it becomes a risk for the department. 

If it's not accessible in Private Beta, you can work with your users to fix it with no risks. If you miss this opportunity and the problems arise in Public Beta, then your product is breaking the law.

### Definition of ready

When writing user stories, we outline criteria for when they are ready to build. This is usually when it’s been through usability testing and the acceptance tests have been defined. But these discussions should also include accessibility.

As part of the stories definition of ready, make sure the team have discussed how the proposed design can be made accessible, and include important content in the story such as page titles and URLs as these can affect accessibility.

Work with an Interaction Designer and a Content Designer to understand which parts of the service might be tricky to build, for example things which do not exist already and will need to be built from scratch. These will require more testing.

An example of accessibility considerations in a definition of done:
- Error messages, page titles and URLs agreed with Content Designer
- Content reviewed by team and accessibility considerations discussed
- Design reviewed by team and accessibility considerations discussed

### Definition of done

Like the definition of ready, the definition of done is a list of criteria which need to be met in order to consider a story to be finished.

If it’s not accessible it’s not done. As part of your definition of done, the service should be checked for accessibility using both automated and manual tests.

We have published guidance on [how to do accessibility testing](/best-practice/how-to-do-accessibility-testing).

An example of accessibility considerations in a definition of done:
- Automated accessibility tests passing in the acceptance tests
- Manual accessibility tests passed using Accessibility Insights
- Manually checked usability using a screen reader
- Manually checked usability using a screen magnifier
- Manually checked usability using speech recognition
- Accessibility statement updated

## Public Beta

Before you go into Public Beta your service will need to be proven to be WCAG 2.1 compliant to the standard of AA and have a published and compliant accessibility statement.

Your service will need a thorough accessibility evaluation and a full report. The report can be used to show an assessment panel that you have done the work, and should be retained for evidence should the service get any challenges once it's live.

A full evaluation is just a snapshot in time. It won't be relevant once you start rolling out new features or updates. You will need to continue to test the accessibility of any iterations so that the service is compliant at all times. 

### Minimum Viable Product (MVP)

An MVP must be accessible. It is not viable if it is not accessible. You can't release a product in any state which is non-compliant or you will be breaking the law.

## Live

As with Public Beta, you will need to continue to test the accessibility of any iterations so that the service is compliant at all times. 

We have published guidance on [how to do accessibility testing](/best-practice/how-to-do-accessibility-testing).
