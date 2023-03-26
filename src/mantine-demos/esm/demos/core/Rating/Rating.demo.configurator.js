import React from 'react';
import { Group, Rating } from '@mantine/core';

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
const codeTemplate = (props) => `
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}${props} />
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Rating, __spreadValues({
    defaultValue: 2
  }, props)));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "yellow", defaultValue: "yellow" },
    { name: "size", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "count", type: "number", initialValue: 5, defaultValue: 5, min: 1, max: 15 },
    { name: "highlightSelectedOnly", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Rating.demo.configurator.js.map
