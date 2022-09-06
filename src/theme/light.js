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
