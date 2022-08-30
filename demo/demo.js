const rangeSlider = require("..");
const { light } = require("../src/theme");

const options = {
  theme: light(),
};
const range = rangeSlider(options);

document.body.append(range);
