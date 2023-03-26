'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Error as boolean \u2013 red border color
<TextInput error />

// Error as React node \u2013 red border color and message below input
<TextInput error="Invalid email" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Your email",
    placeholder: "you@email.com",
    error: true
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    mt: "md",
    label: "Your email",
    placeholder: "you@email.com",
    error: "Invalid email"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

exports.validation = validation;
//# sourceMappingURL=TextInput.demo.validation.js.map
