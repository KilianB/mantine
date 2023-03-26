'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Error as boolean \u2013 red border color */}
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      {/* Error as React node \u2013 red border color and message below input */}
      <ColorInput
        mt="md"
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    label: "Your favorite color",
    placeholder: "Enter color",
    error: true
  }), /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    mt: "md",
    label: "Your favorite color",
    placeholder: "Enter color",
    error: "You cannot pick white"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

exports.validation = validation;
//# sourceMappingURL=ColorInput.demo.validation.js.map
