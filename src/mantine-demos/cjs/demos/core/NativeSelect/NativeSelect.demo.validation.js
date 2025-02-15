'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Error as boolean \u2013 red border color
<NativeSelect error />

// Error as React node \u2013 red border color and message below input
<NativeSelect error="Pick at least one item" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.NativeSelect, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one",
    error: true
  }), /* @__PURE__ */ React__default.createElement(core.NativeSelect, {
    mt: "md",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one",
    error: "Pick at least one item"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

exports.validation = validation;
//# sourceMappingURL=NativeSelect.demo.validation.js.map
