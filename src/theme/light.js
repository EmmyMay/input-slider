function theme() {
  return `
  :host {
    width: 100%;
    height: 1rem;
    position: relative;
    --transparent: hsla(0, 0%, 0%, 0);
  }


input {
  position: absolute;
  top: -0.3rem;
  left: 0;
  z-index: 2;
  width: 100%;
  z-index: 2;
  -webkit-appearance: none;
  background-color: transparent;
}

.fill {
  position: absolute;
  width: 30%;
  height: 12px;
  background-color: grey;
}

input:focus + .bar .fill,
input:focus-within + .bar .fill,
input:active + .bar .fill
 {
  background-color: blueviolet;
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


  `;
}

module.exports = theme;
