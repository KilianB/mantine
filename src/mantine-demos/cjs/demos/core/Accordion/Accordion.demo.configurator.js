'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _base = require('./_base.js');

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
  return /* @__PURE__ */ React__default.createElement(_base.BaseDemo, __spreadProps(__spreadValues({}, props), {
    defaultValue: "customization"
  }));
}
const codeTemplate = (props) => `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion${props} defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "variant",
      type: "select",
      initialValue: "default",
      defaultValue: "default",
      data: [
        { label: "Default", value: "default" },
        { label: "Contained", value: "contained" },
        { label: "Filled", value: "filled" },
        { label: "Separated", value: "separated" }
      ]
    },
    { name: "radius", type: "size", defaultValue: "sm", initialValue: "sm" },
    {
      name: "chevronPosition",
      type: "segmented",
      data: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ],
      initialValue: "right",
      defaultValue: "right"
    },
    { name: "disableChevronRotation", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Accordion.demo.configurator.js.map
