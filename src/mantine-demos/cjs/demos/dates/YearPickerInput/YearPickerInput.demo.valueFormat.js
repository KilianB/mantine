'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.YearPickerInput, {
    valueFormat: "YY",
    type: "multiple",
    label: "Pick year",
    placeholder: "Pick year",
    mx: "auto",
    maw: 400
  });
}
const valueFormat = {
  type: "demo",
  component: Demo,
  code
};

exports.valueFormat = valueFormat;
//# sourceMappingURL=YearPickerInput.demo.valueFormat.js.map
