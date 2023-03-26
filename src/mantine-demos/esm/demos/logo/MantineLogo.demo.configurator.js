import React from 'react';
import { Group } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(MantineLogo, __spreadValues({}, props)));
}
const codeTemplate = (props) => `
import { MantineLogo } from '@mantine/ds';

function Demo() {
  return <MantineLogo${props} />
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "type",
      type: "segmented",
      data: [
        { label: "Full", value: "full" },
        { label: "Mark", value: "mark" }
      ],
      initialValue: "full",
      defaultValue: "full"
    },
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "size", type: "number", initialValue: 30, max: 50, min: 10, step: 5 }
  ]
};

export { configurator };
//# sourceMappingURL=MantineLogo.demo.configurator.js.map
