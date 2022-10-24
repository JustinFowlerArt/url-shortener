# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./design/final-mobile.png)
![](./design/final-desktop.png)

- [Solution URL](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub/url-shortener-with-react-typescript-tailwind-and-fetch-TH2nsVosxs)
- [Live Site URL](https://url-shortener.justinfowlerart.com/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - JS Superset
- [Tailwind CSS](https://tailwindcss.com/) - Styles
- [shrtcode API](https://app.shrtco.de/) - URL Shortener API

### What I learned

I learned a lot about working with APIs and in creating generic a useFetch hook to simplify API call. I also learned some new layout tricks and how to dynamically swap background images with traditional CSS classes instead of component styles.

### Useful resources

- [Implement useFetch react hook to work inside submit function](https://stackoverflow.com/questions/62613709/implement-usefetch-react-hook-to-work-inside-submit-function) - useFetch hook that is able to have a delayed execution.
- [Set types to useFetch using generics with typescript](https://stackoverflow.com/questions/72851178/set-types-to-usefetch-using-generics-with-typescript) - Advice on making the useFetchHook generic with types

## Author

- Website - [Justin Fowler Art](https://www.justinfowlerart.com)