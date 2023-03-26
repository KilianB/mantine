'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
     ${props}
    />
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Radio.Group, {
    name: "demo",
    defaultValue: "react"
  }, /* @__PURE__ */ React__default.createElement(core.Radio, __spreadValues({
    value: "react"
  }, props)));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
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
    { name: "label", type: "string", initialValue: "I cannot be unchecked" },
    { name: "description", type: "string", initialValue: "" },
    { name: "error", type: "string", initialValue: "" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "checked", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Radio.demo.configurator.js.map
