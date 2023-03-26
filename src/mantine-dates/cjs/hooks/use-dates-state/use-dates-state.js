'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var useUncontrolledDates = require('../use-uncontrolled-dates/use-uncontrolled-dates.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function isInRange(date, range) {
  const _range = [...range].sort((a, b) => a.getTime() - b.getTime());
  return dayjs__default(date).subtract(1, "day").isBefore(_range[1]) && dayjs__default(date).add(1, "day").isAfter(_range[0]);
}
function useDatesState({
  type,
  level,
  value,
  defaultValue,
  onChange,
  allowSingleDateInRange,
  allowDeselect,
  onMouseLeave
}) {
  const [_value, setValue] = useUncontrolledDates.useUncontrolledDates({ type, value, defaultValue, onChange });
  const [pickedDate, setPickedDate] = React.useState(type === "range" ? _value[0] && !_value[1] ? _value[0] : null : null);
  const [hoveredDate, setHoveredDate] = React.useState(null);
  const onDateChange = (date) => {
    if (type === "range") {
      if (pickedDate instanceof Date && !_value[1]) {
        if (dayjs__default(date).isSame(pickedDate, level) && !allowSingleDateInRange) {
          setPickedDate(null);
          setHoveredDate(null);
          setValue([null, null]);
          return;
        }
        const result = [date, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        setValue(result);
        setHoveredDate(null);
        setPickedDate(null);
        return;
      }
      if (_value[0] && !_value[1] && dayjs__default(date).isSame(_value[0], level) && !allowSingleDateInRange) {
        setPickedDate(null);
        setHoveredDate(null);
        setValue([null, null]);
        return;
      }
      setValue([date, null]);
      setHoveredDate(null);
      setPickedDate(date);
      return;
    }
    if (type === "multiple") {
      if (_value.some((selected) => dayjs__default(selected).isSame(date, level))) {
        setValue(_value.filter((selected) => !dayjs__default(selected).isSame(date, level)));
      } else {
        setValue([..._value, date]);
      }
      return;
    }
    if (_value && allowDeselect && dayjs__default(date).isSame(_value, level)) {
      setValue(null);
    } else {
      setValue(date);
    }
  };
  const isDateInRange = (date) => {
    if (pickedDate instanceof Date && hoveredDate instanceof Date) {
      return isInRange(date, [hoveredDate, pickedDate]);
    }
    if (_value[0] instanceof Date && _value[1] instanceof Date) {
      return isInRange(date, _value);
    }
    return false;
  };
  const onRootMouseLeave = type === "range" ? (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    setHoveredDate(null);
  } : onMouseLeave;
  const isFirstInRange = (date) => {
    if (!(_value[0] instanceof Date)) {
      return false;
    }
    if (dayjs__default(date).isSame(_value[0], level)) {
      return !(hoveredDate && dayjs__default(hoveredDate).isBefore(_value[0]));
    }
    return false;
  };
  const isLastInRange = (date) => {
    if (_value[1] instanceof Date) {
      return dayjs__default(date).isSame(_value[1], level);
    }
    if (!(_value[0] instanceof Date) || !hoveredDate) {
      return false;
    }
    return dayjs__default(hoveredDate).isBefore(_value[0]) && dayjs__default(date).isSame(_value[0], level);
  };
  const getControlProps = (date) => {
    if (type === "range") {
      return {
        selected: _value.some((selection) => selection && dayjs__default(selection).isSame(date, level)),
        inRange: isDateInRange(date),
        firstInRange: isFirstInRange(date),
        lastInRange: isLastInRange(date),
        "data-autofocus": !!_value[0] && dayjs__default(_value[0]).isSame(date, level) || void 0
      };
    }
    if (type === "multiple") {
      return {
        selected: _value.some((selection) => selection && dayjs__default(selection).isSame(date, level)),
        "data-autofocus": !!_value[0] && dayjs__default(_value[0]).isSame(date, level) || void 0
      };
    }
    const selected = dayjs__default(_value).isSame(date, level);
    return { selected, "data-autofocus": selected || void 0 };
  };
  const onHoveredDateChange = type === "range" && pickedDate ? setHoveredDate : () => {
  };
  return {
    onDateChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue
  };
}

exports.useDatesState = useDatesState;
//# sourceMappingURL=use-dates-state.js.map
