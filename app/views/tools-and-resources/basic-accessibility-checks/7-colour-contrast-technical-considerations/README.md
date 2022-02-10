# {Colour contrast: }Technical considerations

If you are using [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/) you can use all of the responsive styles, layouts and components in the [GOV.UK Design System](https://design-system.service.gov.uk/).

## Colour contrast

### Text sizes

Font sizes are given in points (pt) on the How to test page. The following table shows the equivalent font sizes in pixels and rem. 

<table class="govuk-table">
<caption class="govuk-table__caption">Comparison of font sizes</caption>
<tr class="govuk-table__row">
<th scope="col" class="govuk-table__header">Point (pt)</th>
<th scope="col" class="govuk-table__header">Pixel (px)</th>
<th scope="col" class="govuk-table__header">Rem</th>
</tr>
<tr class="govuk-table__row">
<td class="govuk-table__cell">14</td>
<td class="govuk-table__cell">18.66</td>
<td class="govuk-table__cell">1.166</td>
</tr>
<tr class="govuk-table__row">
<td class="govuk-table__cell">16</td>
<td class="govuk-table__cell">21.33</td>
<td class="govuk-table__cell">1.33</td>
</tr>
<tr class="govuk-table__row">
<td class="govuk-table__cell">18</td>
<td class="govuk-table__cell">24</td>
<td class="govuk-table__cell">1.5</td>
</tr>
</table>

**Please note**: You should not use pixels for font sizes as they do not allow text to reflow properly.

### Non-text items

When testing the contrast of graphical objects, you must consider all colour contrasts within the object. For example, a pie chart may have several coloured segments. Each pair of adjacent colours must have sufficient contrast, as well as each colour against the background. 

If an image is made up of multiple colours, gradient, patterns, etc., the contrast should be measured at the closest points. So if the background is white, measure the lightest part of the image. If the background is black, measure the darkest part of the image.

### Focus styles

A WCAG criterion for minimum focus contrast will be required when WCAG 2.2 is published. Although it is not yet a legal requirement, it is still best practice and you are advised to adopt this now in preparation for WCAG 2.2.

The current focus style for the Gov.uk sites has two components. The yellow background colour is known to fail the contrast test. However, the second part is a thick black underline/border box and this means that a passing focus style is achieved.
