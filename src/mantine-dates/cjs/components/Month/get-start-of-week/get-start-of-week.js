'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getStartOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  while (value.getDay() !== firstDayOfWeek) {
    value.setDate(value.getDate() - 1);
  }
  return value;
}

exports.getStartOfWeek = getStartOfWeek;
//# sourceMappingURL=get-start-of-week.js.map
