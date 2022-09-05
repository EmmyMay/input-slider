function rangeSlider(opts) {
  const { theme, min = 0, max = 100 } = opts;

  // creating dom elements
  const el = createElement();
  const input = createElement({ el: "input" });
  const bar = createElement({ className: "bar" });
  const ruler = createElement({ className: "ruler" });
  const fill = createElement({ className: "fill" });
  const shadow = el.attachShadow({ mode: "closed" });

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
    modifyElement(fill, sliderValue, max);
  };

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

const modifyElement = (el, sliderValue, max = 100) => {
  const elementWidth = (sliderValue / max) * 100;
  el.style.width = elementWidth + "%";
  el.style.background = "#a75ced";
  if (elementWidth > 50) {
    el.style.background =
      "linear-gradient(90deg, rgba(167,92,237,1) 50%, rgba(65,237,183,1) 80%)";
  }
  if (elementWidth > 80) {
    el.style.background =
      "linear-gradient(90deg, rgba(167,92,237,1) 31%, rgba(65,237,183,1) 52%, rgba(65,236,237,1) 80%)";
  }
};

module.exports = rangeSlider;
