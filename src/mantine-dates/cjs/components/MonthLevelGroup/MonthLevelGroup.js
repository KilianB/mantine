'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dayjs = require('dayjs');
var MonthLevelGroup_styles = require('./MonthLevelGroup.styles.js');
var MonthLevel = require('../MonthLevel/MonthLevel.js');
var handleControlKeyDown = require('../../utils/handle-control-key-down.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

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
const MonthLevelGroup = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("MonthLevelGroup", defaultProps, props), {
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
  const { classes, cx } = MonthLevelGroup_styles['default'](null, {
    name: ["MonthLevelGroup", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const daysRefs = React.useRef([]);
  const months = Array(numberOfColumns).fill(0).map((_, monthIndex) => {
    const currentMonth = dayjs__default(month).add(monthIndex, "months").toDate();
    return /* @__PURE__ */ React__default.createElement(MonthLevel.MonthLevel, {
      key: monthIndex,
      month: currentMonth,
      withNext: monthIndex === numberOfColumns - 1,
      withPrevious: monthIndex === 0,
      monthLabelFormat,
      __stopPropagation,
      __onDayClick,
      __onDayMouseEnter,
      __onDayKeyDown: (event, payload) => handleControlKeyDown.handleControlKeyDown({
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
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    className: cx(classes.monthLevelGroup, className),
    ref
  }, others), months);
});
MonthLevelGroup.displayName = "@mantine/dates/MonthLevelGroup";

exports.MonthLevelGroup = MonthLevelGroup;
//# sourceMappingURL=MonthLevelGroup.js.map
