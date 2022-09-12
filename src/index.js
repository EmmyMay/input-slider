let id = 0;

function rangeSlider(opts, protocol, on = {}) {
  const { theme, min = 0, max = 100 } = opts;

  // creating dom elements
  const el = createElement();
  const shadow = el.attachShadow({ mode: "closed" });
  const input = createElement({ el: "input" });
  const bar = createElement({ attr: "class", attrVal: "bar" });
  const ruler = createElement({ attr: "class", attrVal: "ruler" });
  const fill = createElement({ attr: "class", attrVal: "fill" });

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

const createElement = ({ el = "div", attr, attrVal } = {}) => {
  const ele = document.createElement(el);
  if (attr && attrVal) ele.setAttribute(attr, attrVal);
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
