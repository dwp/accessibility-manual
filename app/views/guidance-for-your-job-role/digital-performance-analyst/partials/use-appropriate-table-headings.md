### Use appropriate table headings

If a row or a column needs to be identified for the data to make sense, then you must use appropriate headings.

For example, the following table is to show the number of different beverages several people consume each day, so it needs both column and row headings.

<table class="govuk-table">
  <caption class="govuk-table__caption">
    Daily beverage consumption
  </caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Person</th>
      <th scope="col" class="govuk-table__header">Cold drink</th>
      <th scope="col" class="govuk-table__header">Hot drink</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="govuk-table__header">Chris</th>
      <td class="govuk-table__cell">5 cups</td>
      <td class="govuk-table__cell">0 cups</td>
    </tr>
    <tr>
      <th scope="row" class="govuk-table__header">Paul</th>
      <td class="govuk-table__cell">2 cups</td>
      <td class="govuk-table__cell">4 cups</td>
    </tr>
    <tr>
      <th scope="row" class="govuk-table__header">Sarah</th>
      <td class="govuk-table__cell">0 cups</td>
      <td class="govuk-table__cell">5 cups</td>
    </tr>
  </tbody>
</table>

The HTML structure for the table is as follows:
```html
<table>
  <caption>Daily beverage consumption</caption>
  <thead>
    <tr>
      <th>Person</th>
      <th>Cold drink</th>
      <th>Hot drink</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chris</th>
      <td>5 cups</td>
      <td>0 cups</td>
    </tr>
    <tr>
      <th>Paul</th>
      <td>2 cups</td>
      <td>4 cups</td>
    </tr>
    <tr>
      <th>Sarah</th>
      <td>0 cups</td>
      <td>5 cups</td>
    </tr>
  </tbody>
</table>
```