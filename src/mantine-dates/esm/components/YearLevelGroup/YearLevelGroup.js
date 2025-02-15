import React, { forwardRef, useRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import dayjs from 'dayjs';
import useStyles from './YearLevelGroup.styles.js';
import { YearLevel } from '../YearLevel/YearLevel.js';
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
  numberOfColumns: 1,
  size: "sm"
};
const YearLevelGroup = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("YearLevelGroup", defaultProps, props), {
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
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
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    className,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    variant,
    size
  } = _a, others = __objRest(_a, [
    "year",
    "locale",
    "minDate",
    "maxDate",
    "monthsListFormat",
    "getMonthControlProps",
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
    "onLevelClick",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__stopPropagation",
    "numberOfColumns",
    "levelControlAriaLabel",
    "yearLabelFormat",
    "variant",
    "size"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["YearLevelGroup", __staticSelector],
    styles,
    classNames,
    unstyled,
    variant,
    size
  });
  const controlsRefs = useRef([]);
  const years = Array(numberOfColumns).fill(0).map((_, yearIndex) => {
    const currentYear = dayjs(year).add(yearIndex, "years").toDate();
    return /* @__PURE__ */ React.createElement(YearLevel, {
      key: yearIndex,
      variant,
      size,
      monthsListFormat,
      year: currentYear,
      withNext: yearIndex === numberOfColumns - 1,
      withPrevious: yearIndex === 0,
      yearLabelFormat,
      __stopPropagation,
      __onControlClick,
      __onControlMouseEnter,
      __onControlKeyDown: (event, payload) => handleControlKeyDown({
        index: yearIndex,
        event,
        payload,
        controlsRef: controlsRefs,
        numberOfColumns,
        controlsPerRow: 3
      }),
      __getControlRef: (rowIndex, cellIndex, node) => {
        if (!Array.isArray(controlsRefs.current[yearIndex])) {
          controlsRefs.current[yearIndex] = [];
        }
        if (!Array.isArray(controlsRefs.current[yearIndex][rowIndex])) {
          controlsRefs.current[yearIndex][rowIndex] = [];
        }
        controlsRefs.current[yearIndex][rowIndex][cellIndex] = node;
      },
      levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentYear) : levelControlAriaLabel,
      locale,
      minDate,
      maxDate,
      __preventFocus,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled,
      previousDisabled,
      hasNextLevel,
      getMonthControlProps,
      classNames,
      styles,
      unstyled,
      __staticSelector: __staticSelector || "YearLevelGroup",
      withCellSpacing
    });
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.yearLevelGroup, className),
    ref
  }, others), years);
});
YearLevelGroup.displayName = "@mantine/dates/YearLevelGroup";

export { YearLevelGroup };
//# sourceMappingURL=YearLevelGroup.js.map
