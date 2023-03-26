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
const Wrapper = (props) => /* @__PURE__ */ React__default.createElement(core.Box, {
  p: "xl"
}, /* @__PURE__ */ React__default.createElement(core.Group, {
  position: "center"
}, /* @__PURE__ */ React__default.createElement(core.Tooltip.Floating, __spreadValues({
  label: "Tooltip"
}, props), /* @__PURE__ */ React__default.createElement(core.Box, {
  sx: (theme) => ({
    padding: theme.spacing.xl,
    cursor: "default",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
  })
}, "Hover over the box to see tooltip"))));
const codeTemplate = (props) => `
import { Tooltip, Box } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Tooltip"${props}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          cursor: 'default',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        })}
      >
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`;
const floating = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "color",
      type: "color",
      initialValue: "blue"
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" }
  ]
};

exports.floating = floating;
//# sourceMappingURL=Tooltip.demo.floating.js.map
