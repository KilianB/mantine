'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return <PasswordInput disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    label: "Disabled without value",
    placeholder: "Your password",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    mt: "md",
    label: "Disabled with value",
    placeholder: "Your password",
    disabled: true,
    value: "secret"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=PasswordInput.demo.disabled.js.map
