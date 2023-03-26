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
      dateParser={(input) => {
        if (input === 'WW2') {
          return new Date(1939, 8, 1);
        }
        return new Date(input);
      }}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DateInput, {
    dateParser: (input) => {
      if (input === "WW2") {
        return new Date(1939, 8, 1);
      }
      return new Date(input);
    },
    valueFormat: "DD/MM/YYYY",
    label: "Type WW2",
    placeholder: "Type WW2",
    maw: 400,
    mx: "auto"
  });
}
const parser = {
  type: "demo",
  component: Demo,
  code
};

exports.parser = parser;
//# sourceMappingURL=DateInput.demo.parser.js.map
