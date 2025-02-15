'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function isMonthDisabled(month, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && dayjs__default(month).isBefore(minDate, "month")) {
    return true;
  }
  if (maxDate && dayjs__default(month).isAfter(maxDate, "month")) {
    return true;
  }
  return false;
}

exports.isMonthDisabled = isMonthDisabled;
//# sourceMappingURL=is-month-disabled.js.map
