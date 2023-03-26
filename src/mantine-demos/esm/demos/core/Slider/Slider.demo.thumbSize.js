import React from 'react';
import { Box, Slider, RangeSlider } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Slider, __spreadProps(__spreadValues({}, props), {
    defaultValue: 20
  })), /* @__PURE__ */ React.createElement(RangeSlider, __spreadProps(__spreadValues({}, props), {
    mt: "xl",
    defaultValue: [20, 80]
  })));
}
const codeTemplate = (props) => `
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider${props} defaultValue={20} />
      <RangeSlider${props} mt="xl" defaultValue={[20, 80]} />
    </>
  );
}
`;
const thumbSize = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: "thumbSize", type: "number", min: 14, max: 32, initialValue: 14 }]
};

export { thumbSize };
//# sourceMappingURL=Slider.demo.thumbSize.js.map
