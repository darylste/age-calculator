# Age Calculator - Solution for the [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q)

This is a solution the the Frontend Mentor Age Calculator challenge, aiming to practice and enchance JavaScript and form validation skills.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Technologies](#technologies)
  - [New/Reviewed Concepts](#concepts-learnedreviewed)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Page Design
![Age Calculator Home Page](https://github.com/darylste/age-calculator/blob/main/public/age-calc.jpeg)
Working Example
![Age Calculator Working Page](https://github.com/darylste/age-calculator/blob/main/public/age-calc-example.jpeg)
Error States
![Age Calculator Error States](https://github.com/darylste/age-calculator/blob/main/public/age-calc-err.jpeg)

### Links

- GitHub Repo: [Age Calculator GitHub](https://github.com/darylste/age-calculator)
- Live Solution: [Age Calculator Live](https://age-calculator-darylste.vercel.app/)

### Technologies

- [Next.js](https://nextjs.org/)
  The Age Calculator Application is a simple one page application built using Next.js. This allows for quick and easy development and deployment.

### Useful Resources

- [Classnames](https://www.npmjs.com/package/classnames) - I used the classnames package to easily add/remove class names based on logic e.g. for error state styling.
- [How to Check If Date is Valid in Typescript?](https://www.spguides.com/check-if-date-is-valid-in-typescript/) - This article discusses different methods of checking if a date is valid. I used this article to validate the input date and in turn display error messages/state when the entered date is invalid.

## Author

- Website [Daryl Stensland](https://www.daryl-stensland.com/)
- GitHub [@DarylSte](https://github.com/darylste)
- Frontend Mentor [@DarylSte](https://www.frontendmentor.io/profile/darylste)
