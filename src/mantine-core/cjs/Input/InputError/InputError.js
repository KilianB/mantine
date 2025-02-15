'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@mantine/styles');
var InputError_styles = require('./InputError.styles.js');
var Text = require('../../Text/Text.js');

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
const defaultProps = {
  size: "sm"
};
const InputError = React.forwardRef((props, ref) => {
  const _a = styles.useComponentDefaultProps("InputError", defaultProps, props), {
    children,
    className,
    classNames,
    styles: styles$1,
    unstyled,
    size,
    __staticSelector,
    variant
  } = _a, others = __objRest(_a, [
    "children",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "size",
    "__staticSelector",
    "variant"
  ]);
  const { classes, cx } = InputError_styles['default'](null, {
    name: ["InputWrapper", __staticSelector],
    classNames,
    styles: styles$1,
    unstyled,
    variant,
    size
  });
  return /* @__PURE__ */ React__default.createElement(Text.Text, __spreadValues({
    className: cx(classes.error, className),
    ref
  }, others), children);
});
InputError.displayName = "@mantine/core/InputError";

exports.InputError = InputError;
//# sourceMappingURL=InputError.js.map
