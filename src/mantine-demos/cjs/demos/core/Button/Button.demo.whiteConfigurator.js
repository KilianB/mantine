'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
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
  }, /* @__PURE__ */ React__default.createElement(core.Button, __spreadValues({
    leftIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconDatabase, {
      size: "1rem"
    }),
    variant: "white"
  }, props), "Connect to database"));
}
const codeTemplate = (props) => `
import { Button } from '@mantine/core';
import { IconDatabase } from '@tabler/icons-react';

function Demo() {
  return (
    <Button leftIcon={<IconDatabase />} variant="white"${props}>
      Connect to database
    </Button>
  );
}
`;
const whiteConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  background: (colorScheme) => colorScheme === "dark" ? core.DEFAULT_THEME.colors.dark[7] : core.DEFAULT_THEME.colors.gray[1],
  configurator: [{ name: "color", type: "color", initialValue: "blue", defaultValue: "blue" }]
};

exports.whiteConfigurator = whiteConfigurator;
//# sourceMappingURL=Button.demo.whiteConfigurator.js.map
