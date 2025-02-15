import React, { useState } from 'react';
import { Box, Text, AlphaSlider, DEFAULT_THEME } from '@mantine/core';

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
  const [value, onChange] = useState(1);
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 300,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Text, {
    mb: "xs",
    ml: -6
  }, "Alpha value: ", value), /* @__PURE__ */ React.createElement(AlphaSlider, __spreadValues({
    mx: "auto",
    color: DEFAULT_THEME.colors.blue[7],
    value,
    onChange
  }, props)));
}
const codeTemplate = (props) => `import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(1);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="${DEFAULT_THEME.colors.blue[7]}" value={value} onChange={onChange}${props} />
    </>
  );
}`;
const alphaConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: "size", type: "size", initialValue: "sm", defaultValue: "sm" }]
};

export { alphaConfigurator };
//# sourceMappingURL=ColorPicker.demo.alphaConfigurator.js.map
