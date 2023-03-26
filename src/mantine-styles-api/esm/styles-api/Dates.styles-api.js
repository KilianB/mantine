import { TextInput } from './TextInput.styles-api.js';

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
const CalendarHeader = {
  calendarHeader: "Calendar header root element",
  calendarHeaderControl: "Previous/next calendar header controls",
  calendarHeaderControlIcon: "Icon of previous/next calendar header controls",
  calendarHeaderLevel: "Level control (changes levels when clicked, month -> year -> decade)"
};
const DecadeLevelGroup = __spreadProps(__spreadValues({}, CalendarHeader), {
  decadeLevelGroup: "Group of decades levels",
  decadeLevel: "Decade level root element",
  pickerControl: "Button used to pick months and years",
  yearsList: "Years list table element",
  yearsListRow: "Years list row element",
  yearsListCell: "Years list cell element"
});
const YearLevelGroup = __spreadProps(__spreadValues({}, CalendarHeader), {
  yearLevelGroup: "Group of year levels",
  yearLevel: "Year level root element",
  monthsList: "Months list table element",
  monthsListRow: "Months list table row element",
  monthsListCell: "Months list table cell element",
  pickerControl: "Button used to pick months and years"
});
const MonthLevelGroup = __spreadProps(__spreadValues({}, CalendarHeader), {
  monthLevelGroup: "Group or month levels",
  monthLevel: "Month level root element",
  monthThead: "thead element of month table",
  monthRow: "tr element of month table",
  monthTbody: "tbody element of month table",
  monthCell: "td element of month table",
  month: "Month table element",
  weekdaysRow: "Weekdays tr element",
  weekday: "Weekday th element",
  day: "Month day control"
});
const CalendarBase = {
  calendar: "Calendar root element"
};
const Calendar = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, CalendarBase), DecadeLevelGroup), YearLevelGroup), MonthLevelGroup);
const YearPicker = __spreadValues(__spreadValues({}, CalendarBase), DecadeLevelGroup);
const MonthPicker = __spreadValues(__spreadValues(__spreadValues({}, CalendarBase), DecadeLevelGroup), YearLevelGroup);
const DatePicker = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, CalendarBase), DecadeLevelGroup), YearLevelGroup), MonthLevelGroup);
const YearPickerInput = __spreadValues(__spreadValues({}, TextInput), YearPicker);
const MonthPickerInput = __spreadValues(__spreadValues({}, TextInput), MonthPicker);
const DatePickerInput = __spreadValues(__spreadValues({}, TextInput), DatePicker);
const DateInput = __spreadValues(__spreadValues({}, TextInput), DatePicker);
const DateTimePicker = __spreadProps(__spreadValues(__spreadValues({}, TextInput), DatePicker), {
  placeholder: "Placeholder element",
  timeWrapper: "Wrapper around time input and submit button",
  timeInput: "TimeInput"
});
const TimeInput = TextInput;

export { Calendar, DateInput, DatePicker, DatePickerInput, DateTimePicker, MonthPicker, MonthPickerInput, TimeInput, YearPicker, YearPickerInput };
//# sourceMappingURL=Dates.styles-api.js.map
