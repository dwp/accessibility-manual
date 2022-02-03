# Microsoft Word

## Headings and other visual information

When a sighted person looks at a document, they subconsciously take in a lot of visual information, such as:

- Headings and subheadings
- Lists (bulleted and numbered)
- Tables.

In order to make a Word document accessible, these visual items need to be created correctly, so that a screen reader can access them and read out structural information.

### Choosing a design

Word has many built-in heading styles and their formatting depends on the **design** that is selected. You may want to choose a different design before working on headings. The following video will show you how to select a different design, along with colours and fonts.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IGnzI2qX3Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Styling and modifying headings

The first step in making headings accessible is to style them correctly by marking them as headings from the Styles menu. The following video will explain how to do that.

<iframe width="560" height="315" src="https://www.youtube.com/embed/K2XUFggj5g0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Once you have styled your headings correctly, you may want to modify and format them. The following video covers this.

### Lists

Screen readers read out both bulleted and numbered lists, first stating that it is a list, then the number of items. The information will be clearer if standard black, round bullet points are used and numbers as digits. Please avoid using fancy bullet points or Roman numerals.

### Tables

Tables should only be used to display data. **Never use tables for layout.** Layout will be covered in a later section.

Tables should be as uniform as possible. Try to avoid merging cells, as this can cause confusion for some people. Make sure that each column and/or row has a header cell and that these are marked as such. Use the table design menu to select the best type of table for your data.

## Layout

In Word, there are often different methods of creating the same end result. It is quite possible to have two documents which look identical but one will be completely accessible and the other not at all accessible. Much of this comes down to layout choices.

### Paragraph and line spacing

Try to avoid using <kbd>ENTER</kbd> to create empty lines in your document. Instead, open the paragraph settings and think about line spacing and how much space you want after each paragraph. 

Ideally, line spacing of 1.5 with 18pt after each paragraph, will make your document easier to read. Line spacing of less than 1.2 is hard for some people to read.

### Columns

Columns are the most accessible way to avoid wrapping images so that they are not inline and can be moved around the page. Images that are not inline cannot be read.

Columns can be used for small sections of text, not just whole pages. You can adjust the width of each column and the space between columns. This can improve the look of your document, as well as its accessibility.

### Borders and shading

Text boxes look great in a document. They can draw the eye to important pieces of information. However, text boxes are not read by screen readers unless you copy and paste the entire content into the alt text field (which isn't ideal). 

Instead of using text boxes, use borders and shading. Type your text on the page, so that it is there for a screen reader to access. Then open the borders and shading menu and choose your colours. 

You can change the text alignment and the spacing to the left and right of the text to create visual effects whilst keeping the accessibility.

## Colour contrast

### Normal and large text

Normal text is defined as 16pt or smaller. If it is bold text, then normal is 12pt or smaller.

Large text is 18pt or bigger, and 14pt or bigger for bold text.

### Colour codes

In Word, colours are often selected from a palette by clicking on a colour that looks right. If you open the **more colours** option and the **custom** tab, this will display the RGB (red, green and blue) colour codes for your chosen colour. Below these, is a **hex** colour code. This hexadecimal code is needed for checking colour contrast.

### Contrast checker

The [WebAIM colour contrast checker](https://webaim.org/resources/contrastchecker/) is a very simple tool for checking contrast. It gives pass/fail results for normal text, large text and graphics at both AA and AAA level. You need your contrast to pass at AA level.

## Images

Well chosen images can make a document more visually appealing, as well as helping to tell a story or explain a concept. 

### Wrapping

For an image (or any other non-text item) to be accessed by assistive software, it must be inline. 

The only reason to consider wrapping an object would be if it is completely decorative. That means there is no purpose to it at all, beyond looking pretty. An example of this might be a coloured banner behind a document title.

### Alternate text

Images must be given alt text. Alt text is a brief, clear description of the content of an image. It is not the same as a caption or title. 

When describing an image, think about what type of image it is, the content or main focus of the image, and why you chose it. 

If an image is truly decorative, you can check the decorative box and a screen reader will ignore it.

## Hyperlinks

### Meaningful text on page

When a screen reader reads a URL, it is often long, repetitive and meaningless. Unless it is a short URL, don't type it out on the page. Instead, give it meaningful text and put the URL into the hyperlink box. This will ensure that it reads out in a meaningful way.

### Colours

Hyperlinks are usually visible in a different colour from the main text. When a link has been visited, the colour changes again. You must check that the hyperlink colour and the visited link colour both have sufficient contrast from the page background. 

## Language

### Plain English

Think carefully about your use of language. Research suggest that the average person in the UK has a reading age of 9. So keep your language simple and to the point. Avoid using difficult terms, abbreviations and jargon where possible, or if you do, explain what they mean.

The [Plain English Campaign](http://www.plainenglish.co.uk/) website has many guides and resources to help you get rid of jargon and unnecessary long words. 

### Language of document

Your document will most likely be in English. Check that Word is set up in English (UK) to ensure that a screen reader knows which language to use.

If you change language or have sections which are in a different language, select that part and change the language. Then a screen reader will pronounce the words correctly for that language.

## Accessibility Checker

