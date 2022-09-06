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
