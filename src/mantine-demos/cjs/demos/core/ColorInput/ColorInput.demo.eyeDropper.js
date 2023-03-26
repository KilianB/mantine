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
    <ColorInput
      withEyeDropper
      placeholder="With eye dropper"
      label="Pick any color from the page"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    maw: 320,
    mx: "auto",
    withEyeDropper: true,
    placeholder: "With eye dropper",
    label: "Pick any color from the page"
  });
}
const eyeDropper = {
  type: "demo",
  component: Demo,
  code
};

exports.eyeDropper = eyeDropper;
//# sourceMappingURL=ColorInput.demo.eyeDropper.js.map
