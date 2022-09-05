function rangeSlider(opts) {
  const { theme } = opts;

  // creating dom elements
  const el = createElement();
  const input = createElement({ el: "input" });
  const bar = createElement({ className: "bar" });
  const ruler = createElement({ className: "ruler" });
  const fill = createElement({ className: "fill" });
  const shadow = el.attachShadow({ mode: "closed" });

  input.type = "range";

  // appending dom elements
  appendElement(bar, ruler, fill);
  appendElement(shadow, input, bar);

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
module.exports = rangeSlider;
