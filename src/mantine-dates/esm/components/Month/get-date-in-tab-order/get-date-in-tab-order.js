import dayjs from 'dayjs';
import { isAfterMinDate } from '../is-after-min-date/is-after-min-date.js';
import { isBeforeMaxDate } from '../is-before-max-date/is-before-max-date.js';

function getDateInTabOrder(dates, minDate, maxDate, getDateControlProps, excludeDate) {
  const enabledDates = dates.flat().filter((date) => {
    var _a;
    return isBeforeMaxDate(date, maxDate) && isAfterMinDate(date, minDate) && !(excludeDate == null ? void 0 : excludeDate(date)) && !((_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.disabled);
  });
  const selectedDate = enabledDates.find((date) => {
    var _a;
    return (_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.selected;
  });
  if (selectedDate) {
    return selectedDate;
  }
  const currentDate = enabledDates.find((date) => dayjs().isSame(date, "date"));
  if (currentDate) {
    return currentDate;
  }
  return enabledDates[0];
}

export { getDateInTabOrder };
//# sourceMappingURL=get-date-in-tab-order.js.map
