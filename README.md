# input-slider
## What is it?
It is a slider input component that is very flexible for you to customize or use.

**Usage**
```js
import rangeSlider from 'input-slider'
//or
const rangeSlider = require("input-slider");
```
This function returns an element for you to append to the DOM.

********
You can pass in options such as:
```js
const {
    min = 0,  //number
    max = 1000, //number
    theme, //string-the appearance of the input
  } = options;
```

## Theming
You can change the appearance of the input either using the themes. 'light' is provided by default, but you can add yours.
```js
// theme
const { light } = require("input-slider/src/theme/");
```

## Event Listeners
You can add event listeners to the component by passing an **ON** object to the componenet instance. The **oninput** event is handled internally for some custom styling.


```js
const on = {
  keyup: (e) => {  },
};
rangeSlider(on)
```
  

## Display in the browser

Display in the browser by appending it to a dom element.
