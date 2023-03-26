'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    label: "Disabled without value",
    placeholder: "Your favorite color",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    mt: "md",
    label: "Disabled with value",
    placeholder: "Your favorite color",
    disabled: true,
    value: "#EFD679"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=ColorInput.demo.disabled.js.map
