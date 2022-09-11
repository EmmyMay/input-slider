(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const rangeSlider = require("..");
const { light } = require("../src/theme");

const options = {
  theme: light(),
  max: 1000,
};
const title = document.createElement("h1");
title.innerText = "Range Slider";
const range = rangeSlider(options);

document.body.append(title, range);

},{"..":2,"../src/theme":4}],2:[function(require,module,exports){
let id = 0;

function rangeSlider(opts, protocol, on = {}) {
  const { theme, min = 0, max = 100 } = opts;

  // creating dom elements
  const el = createElement();
  const shadow = el.attachShadow({ mode: "closed" });
  const input = createElement({ el: "input" });
  const bar = createElement({ className: "bar" });
  const ruler = createElement({ className: "ruler" });
  const fill = createElement({ className: "fill" });

  // event name
  const componentName = `slider-${id++}`;

  // Component communication
  const notify = protocol({ from: componentName }, listen);
  function listen(message) {
    const { type, data } = message;
    if (type === "update") {
      input.value = data;
      modifyElement(fill, data, max, shadow);
    }
  }

  // set input attributes
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = min;

  // appending dom elements
  appendElement(bar, ruler, fill);
  appendElement(shadow, input, bar);

  // handling events
  input.oninput = (e) => {
    const sliderValue = Number(e.target.value);
    modifyElement(fill, sliderValue, max, shadow);
    notify({ from: componentName, type: "update", data: sliderValue });
  };
  Object.keys(on).map((K) => {
    return (input[`on${K}`] = on[K]);
  });

  // component styling
  styleComponent(theme, shadow);

  return el;
}

const styleComponent = (theme, shadow) => {
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(theme);
  shadow.adoptedStyleSheets = [styleSheet];
};

const createElement = ({ el = "div", className } = {}) => {
  const ele = document.createElement(el);
  if (className) ele.classList.add(className);

  return ele;
};

const appendElement = (target, ...children) => {
  target.append(...children);
};

const modifyElement = (el, sliderValue, max = 100, shadow) => {
  const elementWidth = (sliderValue / max) * 100;
  el.style.width = elementWidth + "%";
  shadow.host.style.setProperty("--range-color", "hsl(271, 80%, 65%)");
  shadow.host.style.setProperty("--thumb-color", "hsl(271, 80%, 65%)");
  if (elementWidth > 50) {
    shadow.host.style.setProperty(
      "--range-color",
      "linear-gradient(90deg, rgba(167,92,237,1) 50%, rgba(65,237,183,1) 80%)"
    );
    shadow.host.style.setProperty("--thumb-color", "hsl(161, 83%, 59%)");
  }
  if (elementWidth > 80) {
    shadow.host.style.setProperty(
      "--range-color",
      "linear-gradient(90deg, rgba(167,92,237,1) 31%, rgba(65,237,183,1) 52%, rgba(65,236,237,1) 80%)"
    );
    shadow.host.style.setProperty("--thumb-color", "hsl(180, 83%, 59%)");
  }
};

module.exports = rangeSlider;

},{}],3:[function(require,module,exports){
function theme() {
  return `
 
  `;
}

module.exports = theme;

},{}],4:[function(require,module,exports){
const light = require("./light.js");
const dark = require("./dark.js");

module.exports = {
  light,
  dark,
};

},{"./dark.js":3,"./light.js":5}],5:[function(require,module,exports){
function theme() {
  return `
  :host {
    width: 100%;
    height: 1rem;
    position: relative;
    --transparent: hsla(0, 0%, 0%, 0);
    --range-color: hsl(271, 80%, 65%);
    --thumb-color: hsl(271, 80%, 65%);
  }


input {
  position: absolute;
  top: -0.3rem;
  left: 0;
  z-index: 2;
  width: 100%;
  z-index: 2;
  -webkit-appearance: none;
  background-color: var(--transparent);
}

.fill {
  position: absolute;
  height: 12px;
  background-color: grey;
}

  .bar {
  width: 100%;
  height: 12px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  border-radius: .5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input:focus + .bar .fill,
input:focus-within + .bar .fill,
input:active + .bar .fill
 {
  background: var(--range-color);
}

input::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 1rem;
  height: 1rem;
  background-color: white;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, 0.137);
  cursor: pointer;
  -webkit-box-shadow: -2px 3px 12px 0px rgba(145,145,145,0.82);
  -moz-box-shadow: -2px 3px 12px 0px rgba(145,145,145,0.82);
  box-shadow: -2px 3px 12px 0px rgba(145,145,145,0.82);
  transition: background-color .3s, box-shadow .15s linear;
  z-index: 3;
  
}
input::-webkit-slider-thumb:hover{
 -webkit-box-shadow: 0px 0px 0px 7px var(--thumb-color);
-moz-box-shadow: 0px 0px 0px 7px var(--thumb-color);
box-shadow: 0px 0px 0px 7px var(--thumb-color);
}
input::-moz-range-thumb{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, 0.137);
  cursor: pointer;
  -webkit-box-shadow: -2px 3px 12px 0px rgba(145,145,145,0.82);
  -moz-box-shadow: -2px 3px 12px 0px rgba(145,145,145,0.82);
  box-shadow: -2px 3px 12px 0px rgba(145,145,145,0.82);
  transition: background-color .3s, box-shadow .15s linear;
  
}
input::-moz-range-thumb:hover{
-webkit-box-shadow: 0px 0px 0px 7px var(--thumb-color);
-moz-box-shadow: 0px 0px 0px 7px var(--thumb-color);
box-shadow: 0px 0px 0px 7px var(--thumb-color);
}
  `;
}

module.exports = theme;

},{}]},{},[1]);
