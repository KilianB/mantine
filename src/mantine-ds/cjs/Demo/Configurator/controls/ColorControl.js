'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

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
function ColorControl(_a) {
  var _b = _a, { value, label, onChange } = _b, others = __objRest(_b, ["value", "label", "onChange"]);
  const theme = core.useMantineTheme();
  const colors = Object.keys(theme.colors).map((color) => /* @__PURE__ */ React__default.createElement(core.ColorSwatch, {
    color: theme.colorScheme === "dark" ? theme.colors[color][7] : theme.colors[color][5],
    component: "button",
    key: color,
    onClick: () => onChange(color),
    radius: "sm",
    sx: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.colorScheme === "dark" ? theme.colors[color][2] : theme.white,
      flex: `1 0 calc(15% - ${core.rem(4)})`
    }
  }, value === color && /* @__PURE__ */ React__default.createElement(core.CheckIcon, {
    width: core.rem(12),
    height: core.rem(12)
  })));
  return /* @__PURE__ */ React__default.createElement(core.Input.Wrapper, __spreadValues({
    labelElement: "div",
    label: hooks.upperFirst(label)
  }, others), /* @__PURE__ */ React__default.createElement(core.Group, {
    spacing: 2,
    mt: 5
  }, colors));
}
ColorControl.initialValue = "blue";

exports.ColorControl = ColorControl;
//# sourceMappingURL=ColorControl.js.map
