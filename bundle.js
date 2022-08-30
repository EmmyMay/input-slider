(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const rangeSlider = require("..");
const { light } = require("../src/theme");

const options = {
  theme: light(),
};
const range = rangeSlider(options);

document.body.append(range);

},{"..":2,"../src/theme":4}],2:[function(require,module,exports){
function rangeSlider(opts) {
  const { theme } = opts;

  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(theme);

  const el = document.createElement("div");
  const shadow = el.attachShadow({ mode: "closed" });

  const inputContainer = document.createElement("div");
  const input = document.createElement("input");
  input.type = "range";

  inputContainer.append(input);
  shadow.appendChild(inputContainer);

  shadow.adoptedStyleSheets = [styleSheet];

  return el;
}

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
  :host div {

  }
  `;
}

module.exports = theme;

},{}]},{},[1]);
