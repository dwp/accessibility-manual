# {Keyboard accessibility: }Technical considerations

If you are using [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/) you can use all of the responsive styles, layouts and components in the [GOV.UK Design System](https://design-system.service.gov.uk/).

## Keyboard accessible

### Links

Links should be coded using valid html code, using an `<a>` tag, including an href attribute and meaningful text inside the link.

Example code:
```html
<a href="https://dwpdigital.blog.gov.uk/">DWP Digital Blog</a>
```

Output:

<a href="https://dwpdigital.blog.gov.uk/">DWP Digital Blog</a>

This will ensure that the browser recognises it as a link and that user agents such as voice recognition software will recognise the name of the link. So the user could give the voice command, **Click DWP website** and the link will be activated.

### Buttons

There are a number of ways to create a button.

1.  Use the `<button>` tag and ensure that the name of the button is the text contained in the element.  

Example code:

```html
<button>Submit</button>
```

Output:

<button>Submit</button>

3.  Use the `<input>` tag, choose the relevant type attribute, and give the value attribute the name of the button.  

Example code:

```html
<input type="submit" value="Submit" />
<input type="button" value="Save" />` 
```

Output:

<input type="submit" value="Submit"> <input type="button" value="Save">

5.  If the button is an image, put the name of the button in the alt attribute.  

Example code:

```html
<input type="image" src="submit.png" alt="submit" />
```

7.  Alternatively, you can use the title attribute. If you use both, the alt attribute overrides the title attribute.  

Example code:

```html
<input type="image" src="submit.png" title="submit" />
```

### Input fields

There are several different types of input field. These should be created using valid html code, as follows:

Example code:

```html
<input id="text_1" type="text" title="Type of benefit">
<input type="submit" value="Submit" />` 
```

Output:

<input id="text_1" type="text" title="Type of benefit"> <input type="submit" value="Submit">

Example code:
```html
<label for="ta_1">Response: </label>
<textarea id="ta_1" >Sample text</textarea>
```

Output:

<label for="ta_1">Response:</label>
<textarea id="ta_1">Sample text</textarea>

Example code:
```html
<textarea id="ta_1" title="Response" >Sample text</textarea>
```

Output:

<textarea id="ta_1" title="Response">Sample text</textarea>

### Checkboxes

Example code:

```html
<input id="imp_1" type="checkbox">
<label for="imp_1">Blind</label><br/>
<input id="imp_2" type="checkbox">
<label for="imp_2">Deaf</label>` 
```

Output:

<input id="imp_1" type="checkbox"> <label for="imp_1">Blind</label>  
<input id="imp_2" type="checkbox"> <label for="imp_2">Deaf</label>

### Radio buttons

Radio buttons should be created using valid html code.

Example code:

```html
<input type="radio" name="benefit" id="r1" checked="checked"/><label for="r1">JSA</label>
<input type="radio" name="benefit" id="r2" /><label for="r2">ESA</label>
<input type="radio" name="benefit" id="r3" /><label for="r3">PIP</label>
```

Output:

<input type="radio" name="benefit" id="r1" checked="checked"><label for="r1">JSA</label>  
<input type="radio" name="benefit" id="r2"><label for="r2">ESA</label>  
<input type="radio" name="benefit" id="r3"><label for="r3">PIP</label>

Example code:
```html
<fieldset>
	<legend>Choose a benefit:</legend>
	<input id="red" type="radio" name="benefit_1" value="jsa" /><label for="jsa">JSA</label><br />
	<input id="blue" type="radio" name="benefit_1" value="esa" /><label for="esa">ESA</label><br />
	<input id="green" type="radio" name="benefit_1" value="pip" /><label for="pip">PIP</label>
</fieldset>
```

Output:

<fieldset>
	<legend>Choose a benefit:</legend>
	<input id="red" type="radio" name="benefit_1" value="jsa"><label for="jsa">JSA</label>  
	<input id="blue" type="radio" name="benefit_1" value="esa"><label for="esa">ESA</label>  
	<input id="green" type="radio" name="benefit_1" value="pip"><label for="pip">PIP</label>
</fieldset>

### Lists

Lists should be written using valid html code. The name of the list can be given using either the label element or the title attribute for the select element.

Example code:
```html
<label for="s1">Numbers</label>
<select id="s1" size="1">
	<option>One</option>
	<option selected="selected">Two</option>
	<option>Three</option>
</select>
```

Output:

<label for="s1">Numbers</label>
<select id="s1" size="1">
	<option>One</option>
	<option selected="selected">Two</option>
	<option>Three</option>
</select>

Example code:

```html
<select id="s1" title="Numbers" size="1">
	<option>One</option>
	<option selected="selected">Two</option>
	<option>Three</option>
</select>` 
```

Output:

<select id="s1" title="Numbers" size="1"><option>One</option> <option selected="selected">Two</option> <option>Three</option></select>

## Focus visible

The focus styles on interactive elements must have a contrast ratio of 3:1 to meet WCAG 2.1 criterion [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html). 

In WCAG 2.2 there will also be a few extra considerations in order to meet [2.4.11 Focus Appearance (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html).

If you are using GOVUK Frontend, as long as you use the correct classes for your elements, you should pass the focus styles automatically.

For example:
```html
<a href="#" class="govuk-link">govuk-link</a>

<button class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
```