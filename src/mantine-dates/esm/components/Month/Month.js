import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import { getMonthDays } from './get-month-days/get-month-days.js';
import { isSameMonth } from './is-same-month/is-same-month.js';
import { isBeforeMaxDate } from './is-before-max-date/is-before-max-date.js';
import { isAfterMinDate } from './is-after-min-date/is-after-min-date.js';
import useStyles from './Month.styles.js';
import { getDateInTabOrder } from './get-date-in-tab-order/get-date-in-tab-order.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';
import { Day } from '../Day/Day.js';
import { WeekdaysRow } from '../WeekdaysRow/WeekdaysRow.js';

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
  size: "sm",
  withCellSpacing: true
};
const Month = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("Month", defaultProps, props), {
    className,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "month",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "minDate",
    "maxDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "static",
    "__getDayRef",
    "__onDayKeyDown",
    "__onDayClick",
    "__onDayMouseEnter",
    "__preventFocus",
    "__stopPropagation",
    "withCellSpacing",
    "size",
    "variant"
  ]);
  const ctx = useDatesContext();
  const { classes, cx } = useStyles(null, {
    name: ["Month", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const stylesApiProps = {
    __staticSelector: __staticSelector || "Month",
    classNames,
    styles,
    unstyled,
    variant,
    size
  };
  const dates = getMonthDays(month, ctx.getFirstDayOfWeek(firstDayOfWeek));
  const dateInTabOrder = getDateInTabOrder(dates, minDate, maxDate, getDayProps, excludeDate);
  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month);
      const ariaLabel = (getDayAriaLabel == null ? void 0 : getDayAriaLabel(date)) || dayjs(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps == null ? void 0 : getDayProps(date);
      const isDateInTabOrder = dayjs(date).isSame(dateInTabOrder, "date");
      return /* @__PURE__ */ React.createElement("td", {
        key: date.toString(),
        className: classes.monthCell,
        "data-with-spacing": withCellSpacing || void 0
      }, /* @__PURE__ */ React.createElement(Day, __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, stylesApiProps), {
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        renderDay,
        date,
        weekend: ctx.getWeekendDays(weekendDays).includes(date.getDay()),
        outside,
        hidden: hideOutsideDates ? outside : false,
        "aria-label": ariaLabel,
        static: isStatic,
        disabled: (excludeDate == null ? void 0 : excludeDate(date)) || !isBeforeMaxDate(date, maxDate) || !isAfterMinDate(date, minDate),
        ref: (node) => __getDayRef == null ? void 0 : __getDayRef(rowIndex, cellIndex, node)
      }), dayProps), {
        onKeyDown: (event) => {
          var _a2;
          (_a2 = dayProps == null ? void 0 : dayProps.onKeyDown) == null ? void 0 : _a2.call(dayProps, event);
          __onDayKeyDown == null ? void 0 : __onDayKeyDown(event, { rowIndex, cellIndex, date });
        },
        onMouseEnter: (event) => {
          var _a2;
          (_a2 = dayProps == null ? void 0 : dayProps.onMouseEnter) == null ? void 0 : _a2.call(dayProps, event);
          __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(event, date);
        },
        onClick: (event) => {
          var _a2;
          (_a2 = dayProps == null ? void 0 : dayProps.onClick) == null ? void 0 : _a2.call(dayProps, event);
          __onDayClick == null ? void 0 : __onDayClick(event, date);
        },
        onMouseDown: (event) => {
          var _a2;
          (_a2 = dayProps == null ? void 0 : dayProps.onMouseDown) == null ? void 0 : _a2.call(dayProps, event);
          __preventFocus && event.preventDefault();
        },
        tabIndex: __preventFocus || !isDateInTabOrder ? -1 : 0
      })));
    });
    return /* @__PURE__ */ React.createElement("tr", {
      key: rowIndex,
      className: classes.monthRow
    }, cells);
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "table",
    className: cx(classes.month, className),
    ref
  }, others), !hideWeekdays && /* @__PURE__ */ React.createElement("thead", {
    className: classes.monthThead
  }, /* @__PURE__ */ React.createElement(WeekdaysRow, __spreadProps(__spreadValues({}, stylesApiProps), {
    locale,
    firstDayOfWeek,
    weekdayFormat
  }))), /* @__PURE__ */ React.createElement("tbody", {
    className: classes.monthTbody
  }, rows));
});
Month.displayName = "@mantine/dates/Month";

export { Month };
//# sourceMappingURL=Month.js.map
