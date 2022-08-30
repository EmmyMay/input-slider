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
