import React from 'react';
import { NativeSelect } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';

var __defProp = Object.defineProperty;
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
function SelectControl(_a) {
  var _b = _a, {
    value,
    label,
    onChange,
    data,
    capitalize: capitalizeItems = true
  } = _b, others = __objRest(_b, [
    "value",
    "label",
    "onChange",
    "data",
    "capitalize"
  ]);
  return /* @__PURE__ */ React.createElement(NativeSelect, __spreadValues({
    data: data.map((item) => ({
      value: item.value,
      label: capitalizeItems ? upperFirst(item.label) : item.label
    })),
    value,
    label: upperFirst(label),
    onChange: (event) => onChange(event.currentTarget.value)
  }, others));
}
SelectControl.initialValue = "";

export { SelectControl };
//# sourceMappingURL=SelectControl.js.map
