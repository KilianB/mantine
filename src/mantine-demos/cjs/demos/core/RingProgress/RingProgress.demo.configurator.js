'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.RingProgress, __spreadProps(__spreadValues({}, props), {
    sections: [
      { value: 40, color: "cyan" },
      { value: 15, color: "orange" },
      { value: 15, color: "grape" }
    ]
  })));
}
const codeTemplate = (props) => `
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
     ${props}
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: "size", type: "number", initialValue: 120, step: 10, min: 60, max: 400 },
    { name: "thickness", type: "number", initialValue: 12, step: 1, min: 1, max: 40 },
    { name: "roundCaps", type: "boolean", initialValue: true, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=RingProgress.demo.configurator.js.map
