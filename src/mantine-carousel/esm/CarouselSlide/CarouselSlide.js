import React, { forwardRef, useCallback } from 'react';
import { Box } from '@mantine/core';
import { useCarouselContext } from '../Carousel.context.js';
import useStyles from './CarouselSlide.styles.js';

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
const CarouselSlide = forwardRef((_a, ref) => {
  var _b = _a, { children, className, size, gap, onClick } = _b, others = __objRest(_b, ["children", "className", "size", "gap", "onClick"]);
  const ctx = useCarouselContext();
  const { classes, cx } = useStyles({
    gap: typeof gap === "undefined" ? ctx.slideGap : gap,
    size: typeof size === "undefined" ? ctx.slideSize : size,
    orientation: ctx.orientation,
    includeGapInSize: ctx.includeGapInSize,
    breakpoints: ctx.breakpoints
  }, {
    name: "Carousel",
    classNames: ctx.classNames,
    styles: ctx.styles,
    unstyled: ctx.unstyled,
    variant: ctx.variant
  });
  const handleClick = useCallback((event) => {
    var _a2;
    if ((_a2 = ctx.embla) == null ? void 0 : _a2.clickAllowed()) {
      onClick == null ? void 0 : onClick(event);
    }
  }, [ctx.embla, onClick]);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.slide, className),
    ref,
    onClick: handleClick
  }, others), children);
});
CarouselSlide.displayName = "@mantine/carousel/CarouselSlide";

export { CarouselSlide };
//# sourceMappingURL=CarouselSlide.js.map
