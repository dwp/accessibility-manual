### Inputs and labels

All form inputs need labels. It is not acceptable to have a form input without one, and trying to make them too fancy can make them inaccessible.

For some reason forms often get over-designed and the use of labels is not consistent. There is a trend of using placeholder text instead of labels and also using floating labels which use CSS or JavaScript to animate the label to a different position when then field is focussed.

Any input without a label will fail WCAG 3.3.2 Labels or Instructions. A label should be explicit and should link the for attribute on the label to the id attribute of the input. This way the user has a larger target size and it is always clear which field the label is related to.

You should not use placeholder text instead of a label. A label should describe instruction for the input, and placeholder text should be reserved for an example if it is needed. If you use placeholder text instead of a label, you cannot then check what you entered against the instructions without deleting it back out the field.

For example:
```html
<label for="reference">Enter your reference</label>
<input id="reference" placeholder="ABC-123-123" name="reference" type="text" />
```
