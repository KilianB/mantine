import React from 'react';
import { Box, RangeSlider, Slider } from '@mantine/core';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Wrapper(props) {
  const _a = props, { type } = _a, others = __objRest(_a, ["type"]);
  const Component = type === "range" ? RangeSlider : Slider;
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Component, __spreadValues({
    defaultValue: type === "range" ? [20, 80] : 40,
    marks: [
      { value: 20, label: "20%" },
      { value: 50, label: "50%" },
      { value: 80, label: "80%" }
    ]
  }, others)));
}
const codeTemplate = (props) => `
import { ${props.includes("range") ? "RangeSlider" : "Slider"} } from '@mantine/core';

function Demo() {
  return (
    <${props.includes("range") ? "RangeSlider" : "Slider"}${props ? `
      ${props.replace('type="range"', "").trim()}` : ""}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: "type",
      type: "segmented",
      initialValue: "slider",
      defaultValue: "slider",
      data: [
        { label: "Default", value: "slider" },
        { label: "Range", value: "range" }
      ]
    },
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "size", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "showLabelOnHover", type: "boolean", initialValue: true, defaultValue: true },
    { name: "labelAlwaysOn", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Slider.demo.configurator.js.map
