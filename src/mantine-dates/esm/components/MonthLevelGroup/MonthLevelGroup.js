import React, { forwardRef, useRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import dayjs from 'dayjs';
import useStyles from './MonthLevelGroup.styles.js';
import { MonthLevel } from '../MonthLevel/MonthLevel.js';
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
const MonthLevelGroup = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("MonthLevelGroup", defaultProps, props), {
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __onDayClick,
    __onDayMouseEnter,
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
    numberOfColumns,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    variant,
    static: isStatic
  } = _a, others = __objRest(_a, [
    "month",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "minDate",
    "maxDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "__onDayClick",
    "__onDayMouseEnter",
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
    "numberOfColumns",
    "levelControlAriaLabel",
    "monthLabelFormat",
    "__staticSelector",
    "__stopPropagation",
    "size",
    "variant",
    "static"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["MonthLevelGroup", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const daysRefs = useRef([]);
  const months = Array(numberOfColumns).fill(0).map((_, monthIndex) => {
    const currentMonth = dayjs(month).add(monthIndex, "months").toDate();
    return /* @__PURE__ */ React.createElement(MonthLevel, {
      key: monthIndex,
      month: currentMonth,
      withNext: monthIndex === numberOfColumns - 1,
      withPrevious: monthIndex === 0,
      monthLabelFormat,
      __stopPropagation,
      __onDayClick,
      __onDayMouseEnter,
      __onDayKeyDown: (event, payload) => handleControlKeyDown({
        index: monthIndex,
        event,
        payload,
        controlsRef: daysRefs,
        numberOfColumns,
        controlsPerRow: 7
      }),
      __getDayRef: (rowIndex, cellIndex, node) => {
        if (!Array.isArray(daysRefs.current[monthIndex])) {
          daysRefs.current[monthIndex] = [];
        }
        if (!Array.isArray(daysRefs.current[monthIndex][rowIndex])) {
          daysRefs.current[monthIndex][rowIndex] = [];
        }
        daysRefs.current[monthIndex][rowIndex][cellIndex] = node;
      },
      levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentMonth) : levelControlAriaLabel,
      locale,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      minDate,
      maxDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
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
      classNames,
      styles,
      unstyled,
      __staticSelector: __staticSelector || "MonthLevelGroup",
      size,
      variant,
      static: isStatic,
      withCellSpacing
    });
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.monthLevelGroup, className),
    ref
  }, others), months);
});
MonthLevelGroup.displayName = "@mantine/dates/MonthLevelGroup";

export { MonthLevelGroup };
//# sourceMappingURL=MonthLevelGroup.js.map
