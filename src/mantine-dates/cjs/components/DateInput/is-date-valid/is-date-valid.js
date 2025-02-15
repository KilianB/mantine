'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function isDateValid({ date, maxDate, minDate }) {
  if (date == null) {
    return false;
  }
  if (Number.isNaN(date.getTime())) {
    return false;
  }
  if (maxDate && dayjs__default(date).isAfter(maxDate, "date")) {
    return false;
  }
  if (minDate && dayjs__default(date).isBefore(minDate, "date")) {
    return false;
  }
  return true;
}

exports.isDateValid = isDateValid;
//# sourceMappingURL=is-date-valid.js.map
