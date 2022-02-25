# {Links and buttons: }How to test

## The purpose of each link and button is clear
For each button and link, it must be obvious what will happen if you use it. The text on the page should be meaningful rather than generic, e.g. 'Accessibility Guidelines' rather than 'click here' or 'read more'.

## No broken or internal-only links
All links must work. This means no 404 errors, but also no internal links. If you are putting the website live on the internet, and you are linking to a page on your organisations intranet, then that link isn't going to work for some users.

## Navigation menus on more than 1 page are in the same order
If you have a common navigation menu then it must be in the same order on every page. If the order switches then it can cause confusion for people and may cause them to click on the wrong thing.

## Buttons on more than 1 page are labelled consistently
If you have buttons which have a common functionality then they should be labelled the same whenever they appear on different pages. For example, if you are using a button labelled 'continue' at the bottom of each step, then it should consistantly be labelled 'continue'. If one of the pages used a 'next' button instead, this could cause confusion.

## Button icons have a text alternative
For any buttons which only have an icon, such as a 'play' button, they should also have a text alternative. Depending on how the button is built, this can be added via an `aria-label` attribute, using alt text on an image, or by using hidden text. For example:
```html
<button class="play-button" aria-label="Play"></button>

<button class="play-button">
  <img src="play-icon.png" alt="Play" />
</button>

<button class="play-button">
  <span class="visually-hidden">
    Play
  </span>
</button>
```

## Buttons and links use the correct tags or roles 
It is essential that links and buttons are coded correcty and that users can activate them, expecting a predictable response.

Links should be used for users to navigate to other pages or parts of the same page. Buttons should be used as controls. This could be to open and close parts of the page or to interact with forms.

A link should look like a link and behave like a link, and a button should look like a button and behave like a button. For example:
```html
<a href="/home">Home</a>
<button>Save</button>
```

You should always use the correct element, but in some cases you may need to style a link to look like a button, or a button to look like a link. If this is the case, then they must be given the correct role attribute. For example:
```html
<a class="btn" href="/home" role="button">Home</a>
<button class="link" role="link">Home</button>
```
