import React from 'react';
import { useMantineTheme, Col, Box, Text } from '@mantine/core';

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
function ColWrapper(props) {
  var _a;
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Col, __spreadValues({}, props), /* @__PURE__ */ React.createElement(Box, {
    sx: {
      minHeight: ((_a = props.style) == null ? void 0 : _a.minHeight) ? props.style.minHeight : null,
      height: "100%",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.blue[0],
      padding: theme.spacing.md
    }
  }, /* @__PURE__ */ React.createElement(Text, {
    color: theme.colorScheme === "dark" ? "dimmed" : "blue",
    size: "xl",
    weight: 700,
    align: "center"
  }, props.children)));
}

export { ColWrapper };
//# sourceMappingURL=_col-wrapper.js.map
