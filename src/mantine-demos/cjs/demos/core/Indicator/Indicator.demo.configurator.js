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
  }, /* @__PURE__ */ React__default.createElement(core.Indicator, __spreadValues({}, props), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    size: "lg",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  })));
}
const codeTemplate = (props) => `
import { Indicator, Avatar, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Indicator${props}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
    </Group>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    {
      name: "position",
      type: "select",
      data: [
        { value: "top-start", label: "top-start" },
        { value: "top-center", label: "top-center" },
        { value: "top-end", label: "top-end" },
        { value: "middle-start", label: "middle-start" },
        { value: "middle-center", label: "middle-center" },
        { value: "middle-end", label: "middle-end" },
        { value: "bottom-start", label: "bottom-start" },
        { value: "bottom-center", label: "bottom-center" },
        { value: "bottom-end", label: "bottom-end" }
      ],
      initialValue: "top-end",
      defaultValue: "top-end"
    },
    { name: "radius", type: "size", initialValue: "xl", defaultValue: "xl" },
    { name: "size", type: "number", initialValue: 10, defaultValue: 10, step: 1, min: 6, max: 30 },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "withBorder", type: "boolean", initialValue: false, defaultValue: false },
    { name: "processing", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Indicator.demo.configurator.js.map
