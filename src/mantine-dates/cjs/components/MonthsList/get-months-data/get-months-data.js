'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function getMonthsData(year) {
  const startOfYear = dayjs__default(year).startOf("year").toDate();
  const results = [[], [], [], []];
  let currentMonthIndex = 0;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      results[i].push(dayjs__default(startOfYear).add(currentMonthIndex, "months").toDate());
      currentMonthIndex += 1;
    }
  }
  return results;
}

exports.getMonthsData = getMonthsData;
//# sourceMappingURL=get-months-data.js.map
