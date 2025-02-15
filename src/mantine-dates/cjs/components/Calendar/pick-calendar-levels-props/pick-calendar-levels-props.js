'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
function pickCalendarProps(props) {
  const _a = props, {
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    onNextMonth,
    onPreviousMonth,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    allowSingleDateInRange,
    allowDeselect,
    minDate,
    maxDate,
    locale
  } = _a, others = __objRest(_a, [
    "maxLevel",
    "minLevel",
    "defaultLevel",
    "level",
    "onLevelChange",
    "date",
    "defaultDate",
    "onDateChange",
    "numberOfColumns",
    "columnsToScroll",
    "ariaLabels",
    "onYearSelect",
    "onMonthSelect",
    "onYearMouseEnter",
    "onMonthMouseEnter",
    "onNextMonth",
    "onPreviousMonth",
    "onNextYear",
    "onPreviousYear",
    "onNextDecade",
    "onPreviousDecade",
    "__updateDateOnYearSelect",
    "__updateDateOnMonthSelect",
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "monthLabelFormat",
    "monthsListFormat",
    "getMonthControlProps",
    "yearLabelFormat",
    "yearsListFormat",
    "getYearControlProps",
    "decadeLabelFormat",
    "allowSingleDateInRange",
    "allowDeselect",
    "minDate",
    "maxDate",
    "locale"
  ]);
  return {
    calendarProps: {
      maxLevel,
      minLevel,
      defaultLevel,
      level,
      onLevelChange,
      date,
      defaultDate,
      onDateChange,
      numberOfColumns,
      columnsToScroll,
      ariaLabels,
      onYearSelect,
      onMonthSelect,
      onYearMouseEnter,
      onMonthMouseEnter,
      onNextMonth,
      onPreviousMonth,
      onNextYear,
      onPreviousYear,
      onNextDecade,
      onPreviousDecade,
      __updateDateOnYearSelect,
      __updateDateOnMonthSelect,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      monthLabelFormat,
      monthsListFormat,
      getMonthControlProps,
      yearLabelFormat,
      yearsListFormat,
      getYearControlProps,
      decadeLabelFormat,
      allowSingleDateInRange,
      allowDeselect,
      minDate,
      maxDate,
      locale
    },
    others
  };
}

exports.pickCalendarProps = pickCalendarProps;
//# sourceMappingURL=pick-calendar-levels-props.js.map
