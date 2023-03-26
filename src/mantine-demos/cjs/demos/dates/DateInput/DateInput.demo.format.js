'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="YYYY MMM DD"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DateInput, {
    valueFormat: "YYYY MMM DD",
    label: "Date input",
    placeholder: "Date input",
    maw: 400,
    mx: "auto"
  });
}
const format = {
  type: "demo",
  component: Demo,
  code
};

exports.format = format;
//# sourceMappingURL=DateInput.demo.format.js.map
