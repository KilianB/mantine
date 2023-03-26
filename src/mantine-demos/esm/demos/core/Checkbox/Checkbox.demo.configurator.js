import React from 'react';
import { Checkbox } from '@mantine/core';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const codeTemplate = (props) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
     ${props}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React.createElement(Checkbox, __spreadProps(__spreadValues({}, props), {
    defaultChecked: true
  })),
  codeTemplate,
  configuratorProps: {
    multiline: 3
  },
  configurator: [
    {
      name: "labelPosition",
      type: "segmented",
      data: [
        { value: "right", label: "Right" },
        { value: "left", label: "Left" }
      ],
      initialValue: "right",
      defaultValue: "right"
    },
    { name: "label", type: "string", initialValue: "I agree to sell my privacy" },
    { name: "description", type: "string", initialValue: "" },
    { name: "error", type: "string", initialValue: "" },
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "indeterminate", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Checkbox.demo.configurator.js.map
