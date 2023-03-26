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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Chip, __spreadValues({
    defaultChecked: true
  }, props), "Awesome chip"));
}
const codeTemplate = (props) => `
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked${props}>Awesome chip</Chip>
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    {
      name: "variant",
      type: "segmented",
      data: [
        { value: "outline", label: "Outline" },
        { value: "light", label: "Light" },
        { value: "filled", label: "Filled" }
      ],
      initialValue: "outline",
      defaultValue: "outline"
    },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "radius", type: "size", initialValue: "xl", defaultValue: "xl" }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Chip.demo.configurator.js.map
