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
  return /* @__PURE__ */ React__default.createElement(core.Input.Wrapper, __spreadValues({
    id: "input-demo",
    maw: 440,
    mx: "auto"
  }, props), /* @__PURE__ */ React__default.createElement(core.Input, {
    id: "input-demo",
    placeholder: "Your email",
    size: props.size
  }));
}
const codeTemplate = (props) => `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input.Wrapper
      id="input-demo"
     ${props}
    >
      <Input id="input-demo" placeholder="Your email" />
    </Input.Wrapper>
  );
}
`;
const wrapperConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: "withAsterisk",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    },
    {
      name: "label",
      type: "string",
      initialValue: "Credit card information"
    },
    {
      name: "description",
      type: "string",
      initialValue: "Please enter your credit card information, we need some money"
    },
    {
      name: "error",
      type: "string",
      initialValue: "Your credit card expired"
    },
    {
      name: "size",
      type: "size",
      initialValue: "sm",
      defaultValue: "sm"
    }
  ]
};

exports.wrapperConfigurator = wrapperConfigurator;
//# sourceMappingURL=Input.demo.wrapperConfigurator.js.map
