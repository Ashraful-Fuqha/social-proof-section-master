# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Solution URL here](https://your-solution-url.com)
- Live Site URL: [Live site URL here](https://ashraful-fuqha.github.io/social-proof-section-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS and using gulp as Module bundles

### What I learned

I learned about the grid properties and lot more had fun with my friends.

see below:

```html
<section class="txt-section">
  <h1>10,000+ of our users love our products.</h1>
      
  <p>We only provide great products combined with excellent customer service. See whatoursatisfied customers are saying about our services.</p>  
</section>
```
```css
@include breakpoint-up('md'){
  background: url("../images/bg-pattern-top-desktop.svg") no-repeat left top, url("../images/bg-pattern-bottom-desktop.svg") no-repeat right bottom;
}```
```js
function stylesTask(){
    return src(paths.stylesPath, {sourcemaps:true})
    .pipe(sass())
    .pipe(cleancss())
    .pipe(autoprefixer())
    .pipe(dest('dist', {sourcemaps: '.'}));
}
```


### Continued development
Next i'm going to learn about the Bootstrap with two or more projects followed by Tailwind.

## Author

- Website - Yeah!
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Ashraful-Fuqha)

