'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function getWeekdayNames({
  locale,
  format = "dd",
  firstDayOfWeek = 1
}) {
  const baseDate = dayjs__default().startOf("week");
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    labels.push(dayjs__default(baseDate).add(i, "days").locale(locale).format(format));
  }
  return [...labels.slice(firstDayOfWeek), ...labels.slice(0, firstDayOfWeek)];
}

exports.getWeekdayNames = getWeekdayNames;
//# sourceMappingURL=get-weekdays-names.js.map
