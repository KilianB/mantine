import { Input } from './Input.styles-api.js';
import { InputWrapper } from './InputWrapper.styles-api.js';

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
const Autocomplete = __spreadValues(__spreadValues({
  dropdown: "Dropdown element",
  item: "Item element, rendered inside dropdown",
  nothingFound: "Nothing found label",
  separator: "Divider wrapper",
  separatorLabel: "Separator Label",
  itemsWrapper: "Wraps all items in dropdown"
}, Input), InputWrapper);

export { Autocomplete };
//# sourceMappingURL=Autocomplete.styles-api.js.map
