'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

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
var useFullScreenStyles = core.createStyles((theme) => ({
  wrapper: __spreadProps(__spreadValues({}, theme.fn.cover(0)), {
    position: "fixed",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    padding: theme.spacing.xs,
    transition: "opacity 100ms ease"
  }),
  dropzone: {
    flex: 1
  }
}));

exports.default = useFullScreenStyles;
//# sourceMappingURL=DropzoneFullScreen.styles.js.map
