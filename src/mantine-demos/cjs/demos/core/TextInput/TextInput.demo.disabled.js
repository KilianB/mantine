'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled />
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Disabled without value",
    placeholder: "Your email",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    mt: "md",
    label: "Disabled with value",
    placeholder: "Your email",
    disabled: true,
    value: "myemail@gmail.com"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=TextInput.demo.disabled.js.map
