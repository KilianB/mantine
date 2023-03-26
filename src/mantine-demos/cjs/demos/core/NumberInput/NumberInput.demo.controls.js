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
    <>
      <NumberInput label="By default controls are visible" />

      <NumberInput
        hideControls
        label="Disable them with hideControls prop"
      />

      <NumberInput
        label="Disabled"
        disabled
        label="Controls also not rendered when input is disabled"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 420,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    label: "By default controls are visible",
    placeholder: "Controls are visible"
  }), /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    mt: "md",
    hideControls: true,
    label: "Disable them with hideControls prop",
    placeholder: "Controls are disabled"
  }), /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    mt: "md",
    disabled: true,
    label: "Controls also not rendered when input is disabled",
    placeholder: "Input disabled"
  }));
}
const controls = {
  type: "demo",
  code,
  component: Demo
};

exports.controls = controls;
//# sourceMappingURL=NumberInput.demo.controls.js.map
