'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      decimalSeparator=","
      label="Number input with a custom decimal separator"
      defaultValue={0.5}
      precision={2}
      step={0.5}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    maw: 320,
    mx: "auto",
    decimalSeparator: ",",
    label: "Number input with a custom decimal separator",
    placeholder: "Decimal separator",
    defaultValue: 0.5,
    precision: 2,
    step: 0.5
  });
}
const decimalSeparator = {
  type: "demo",
  code,
  component: Demo
};

exports.decimalSeparator = decimalSeparator;
//# sourceMappingURL=NumberInput.demo.decimalSeparator.js.map
