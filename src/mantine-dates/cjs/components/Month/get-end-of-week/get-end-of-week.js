'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getEndOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  while (value.getDay() !== lastDayOfWeek) {
    value.setDate(value.getDate() + 1);
  }
  return value;
}

exports.getEndOfWeek = getEndOfWeek;
//# sourceMappingURL=get-end-of-week.js.map
