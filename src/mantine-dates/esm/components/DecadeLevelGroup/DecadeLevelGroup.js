import React, { forwardRef, useRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import dayjs from 'dayjs';
import useStyles from './DecadeLevelGroup.styles.js';
import { DecadeLevel } from '../DecadeLevel/DecadeLevel.js';
import { handleControlKeyDown } from '../../utils/handle-control-key-down.js';

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
  numberOfColumns: 1
};
const DecadeLevelGroup = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("DecadeLevelGroup", defaultProps, props), {
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    className,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    decadeLabelFormat,
    variant,
    size
  } = _a, others = __objRest(_a, [
    "decade",
    "locale",
    "minDate",
    "maxDate",
    "yearsListFormat",
    "getYearControlProps",
    "__onControlClick",
    "__onControlMouseEnter",
    "withCellSpacing",
    "__preventFocus",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "nextDisabled",
    "previousDisabled",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__stopPropagation",
    "numberOfColumns",
    "levelControlAriaLabel",
    "decadeLabelFormat",
    "variant",
    "size"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["DecadeLevelGroup", __staticSelector],
    styles,
    classNames,
    unstyled,
    variant,
    size
  });
  const controlsRefs = useRef([]);
  const decades = Array(numberOfColumns).fill(0).map((_, decadeIndex) => {
    const currentDecade = dayjs(decade).add(decadeIndex * 10, "years").toDate();
    return /* @__PURE__ */ React.createElement(DecadeLevel, {
      key: decadeIndex,
      variant,
      size,
      yearsListFormat,
      decade: currentDecade,
      withNext: decadeIndex === numberOfColumns - 1,
      withPrevious: decadeIndex === 0,
      decadeLabelFormat,
      __onControlClick,
      __onControlMouseEnter,
      __onControlKeyDown: (event, payload) => handleControlKeyDown({
        index: decadeIndex,
        event,
        payload,
        controlsRef: controlsRefs,
        numberOfColumns,
        controlsPerRow: [3, 3, 3, 1]
      }),
      __getControlRef: (rowIndex, cellIndex, node) => {
        if (!Array.isArray(controlsRefs.current[decadeIndex])) {
          controlsRefs.current[decadeIndex] = [];
        }
        if (!Array.isArray(controlsRefs.current[decadeIndex][rowIndex])) {
          controlsRefs.current[decadeIndex][rowIndex] = [];
        }
        controlsRefs.current[decadeIndex][rowIndex][cellIndex] = node;
      },
      levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentDecade) : levelControlAriaLabel,
      locale,
      minDate,
      maxDate,
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      nextDisabled,
      previousDisabled,
      getYearControlProps,
      __staticSelector: __staticSelector || "DecadeLevelGroup",
      classNames,
      styles,
      unstyled,
      withCellSpacing
    });
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.decadeLevelGroup, className),
    ref
  }, others), decades);
});
DecadeLevelGroup.displayName = "@mantine/dates/DecadeLevelGroup";

export { DecadeLevelGroup };
//# sourceMappingURL=DecadeLevelGroup.js.map
