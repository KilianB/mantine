'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput
        label="Toggle button is not focusable"
        placeholder="Toggle button is not focusable"
      />

      <PasswordInput
        label="Toggle button is focusable"
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 360,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    label: "Toggle button is not focusable",
    placeholder: "Toggle button is not focusable",
    toggleTabIndex: -1
  }), /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    mt: "md",
    label: "Toggle button is focusable",
    placeholder: "Toggle button is focusable",
    toggleTabIndex: 0
  }));
}
const focus = {
  type: "demo",
  code,
  component: Demo
};

exports.focus = focus;
//# sourceMappingURL=PasswordInput.demo.focus.js.map
