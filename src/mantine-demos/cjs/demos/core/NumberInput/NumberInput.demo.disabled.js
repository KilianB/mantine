'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    maw: 320,
    mx: "auto",
    label: "Enter your age",
    placeholder: "Your age",
    disabled: true,
    value: 20
  });
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=NumberInput.demo.disabled.js.map
