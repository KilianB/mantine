import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import { getMonthsData } from './get-months-data/get-months-data.js';
import { isMonthDisabled } from './is-month-disabled/is-month-disabled.js';
import useStyles from './MonthsList.styles.js';
import { getMonthInTabOrder } from './get-month-in-tab-order/get-month-in-tab-order.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';
import { PickerControl } from '../PickerControl/PickerControl.js';

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
  monthsListFormat: "MMM",
  size: "sm",
  withCellSpacing: true
};
const MonthsList = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("MonthsList", defaultProps, props), {
    year,
    className,
    monthsListFormat,
    locale,
    minDate,
    maxDate,
    getMonthControlProps,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    size,
    variant,
    __stopPropagation,
    withCellSpacing
  } = _a, others = __objRest(_a, [
    "year",
    "className",
    "monthsListFormat",
    "locale",
    "minDate",
    "maxDate",
    "getMonthControlProps",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "__preventFocus",
    "size",
    "variant",
    "__stopPropagation",
    "withCellSpacing"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["MonthsList", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const ctx = useDatesContext();
  const months = getMonthsData(year);
  const monthInTabOrder = getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps);
  const rows = months.map((monthsRow, rowIndex) => {
    const cells = monthsRow.map((month, cellIndex) => {
      const controlProps = getMonthControlProps == null ? void 0 : getMonthControlProps(month);
      const isMonthInTabOrder = dayjs(month).isSame(monthInTabOrder, "month");
      return /* @__PURE__ */ React.createElement("td", {
        key: cellIndex,
        className: classes.monthsListCell,
        "data-with-spacing": withCellSpacing || void 0
      }, /* @__PURE__ */ React.createElement(PickerControl, __spreadProps(__spreadValues({
        variant,
        size,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "MonthsList",
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        disabled: isMonthDisabled(month, minDate, maxDate),
        ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node)
      }, controlProps), {
        onKeyDown: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a2.call(controlProps, event);
          __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: month });
        },
        onClick: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a2.call(controlProps, event);
          __onControlClick == null ? void 0 : __onControlClick(event, month);
        },
        onMouseEnter: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a2.call(controlProps, event);
          __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, month);
        },
        onMouseDown: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a2.call(controlProps, event);
          __preventFocus && event.preventDefault();
        },
        tabIndex: __preventFocus || !isMonthInTabOrder ? -1 : 0
      }), dayjs(month).locale(ctx.getLocale(locale)).format(monthsListFormat)));
    });
    return /* @__PURE__ */ React.createElement("tr", {
      key: rowIndex,
      className: classes.monthsListRow
    }, cells);
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "table",
    ref,
    className: cx(classes.monthsList, className)
  }, others), /* @__PURE__ */ React.createElement("tbody", null, rows));
});
MonthsList.displayName = "@mantine/dates/MonthsList";

export { MonthsList };
//# sourceMappingURL=MonthsList.js.map
