import React, { forwardRef } from 'react';
import { getDefaultZIndex, useComponentDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import useStyles from './Overlay.styles.js';
import { Box } from '../Box/Box.js';

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
  opacity: 0.6,
  color: "#000",
  zIndex: getDefaultZIndex("modal"),
  radius: 0
};
const _Overlay = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("Overlay", defaultProps, props), {
    variant,
    opacity,
    color,
    blur,
    gradient,
    zIndex,
    radius,
    children,
    className,
    classNames,
    styles,
    unstyled,
    center,
    fixed
  } = _a, others = __objRest(_a, [
    "variant",
    "opacity",
    "color",
    "blur",
    "gradient",
    "zIndex",
    "radius",
    "children",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "center",
    "fixed"
  ]);
  const { classes, cx } = useStyles({ color, opacity, blur, radius, gradient, fixed, zIndex }, { name: "Overlay", classNames, styles, unstyled, variant });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    ref,
    className: cx(classes.root, className),
    "data-center": center || void 0
  }, others), children);
});
_Overlay.displayName = "@mantine/core/Overlay";
const Overlay = createPolymorphicComponent(_Overlay);

export { Overlay };
//# sourceMappingURL=Overlay.js.map
