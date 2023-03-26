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
      valueFormat="DD/MM/YYYY HH:mm:ss"
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
    valueFormat: "DD/MM/YYYY HH:mm:ss",
    label: "Date input",
    placeholder: "Date input",
    maw: 400,
    mx: "auto"
  });
}
const time = {
  type: "demo",
  component: Demo,
  code
};

exports.time = time;
//# sourceMappingURL=DateInput.demo.time.js.map
