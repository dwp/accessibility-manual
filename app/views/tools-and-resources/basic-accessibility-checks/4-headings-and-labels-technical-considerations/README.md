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

### CSS for headings

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

<caption>Covid cases at Hogwarts</caption>

| Month | Griffindor | Slytherin |
| --- | --- | --- |
| November | 37 | 178 |
| December | 41 | 200 |

### CSS for tables

## Labels