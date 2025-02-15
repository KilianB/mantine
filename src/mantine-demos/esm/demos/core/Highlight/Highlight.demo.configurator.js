import React from 'react';
import { Highlight } from '@mantine/core';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Highlight, __spreadValues({
    maw: 400,
    mx: "auto"
  }, props));
}
const codeTemplate = (props, children) => `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight${props}>
      ${children}
    </Highlight>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "highlightColor", type: "color", initialValue: "yellow", defaultValue: "yellow" },
    { name: "highlight", type: "string", initialValue: "this" },
    {
      name: "children",
      type: "string",
      initialValue: "Highlight This, definitely THIS and also this!"
    }
  ]
};

export { configurator };
//# sourceMappingURL=Highlight.demo.configurator.js.map
