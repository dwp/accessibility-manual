# {Headings and labels: }Technical considerations

If you are using [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/) you can use all of the responsive styles, layouts and components in the [GOV.UK Design System](https://design-system.service.gov.uk/).

## Headings

### HTML for headings

It is important to mark up headings using valid HTML code. Headings should always be nested correctly rather than heading levels being selected to match formatting preferences. If necessary, the CSS can be amended to change formatting.

```html
<h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
        <h3>Heading level 3</h3>
            <h4>Heading level 4</h4>
        <h3>Heading level 3</h3>
    <h2>Heading level 2</h2>
    <h2>Heading level 2</h2>
        <h3>Heading level 3</h3>
```

In most circumstances, a page should only have one `<h1>` heading.

## Tables

### HTML for tables

Tables should be coded as follows:

```html
<table>
	<caption>Covid cases at Hogwarts</caption>
		<tr>
			<th scope="col">Month</th>
			<th scope="col>">Griffindor</th>
			<th scope="col">Slytherin</th>
		</tr>
		<tr>
			<th scope="row">November</th>
			<td>37</td>
			<td>178</td>
		</tr>
		<tr>
			<th scope="row">December</th>
			<td>41</td>
			<td>200</td>
		</tr>
</table>
```

The `<caption>` tag should come immediately after the opening `<table>` tag.

Output:

<table class="govuk-table">
<caption class="govuk-table__caption--m">Covid cases at Hogwarts</caption>
<tr class="govuk-table__row">
<th scope="col" class="govuk-table__header">Month</th>
<th scope="col" class="govuk-table__header">Griffindor</th>
<th scope="col" class="govuk-table__header">Slytherin</th>
</tr>
<tr class="govuk-table__row">
<th scope="row" class="govuk-table__header">November</th>
<td class="govuk-table__cell">37</td>
<td class="govuk-table__cell">178</td>
</tr>
<tr class="govuk-table__row">
<th scope="row" class="govuk-table__header">December</th>
<td class="govuk-table__cell">41</td>
<td class="govuk-table__cell">200</td>
</tr>
</table>

## Labels

Correct html code for form labels is shown on the [Keyboard Accessibility: technical considerations](3-keyboard-accessibility-technical-considerations) page.