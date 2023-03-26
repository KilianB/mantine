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
      <NumberInput
        label="Your age"
        description="From 0 to 120, step is 1"
        placeholder="Your age"
        max={120}
        min={0}
      />

      <NumberInput
        label="Your weight in kg"
        description="From 0 to Infinity, step is 5"
        defaultValue={80}
        step={5}
        min={0}
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
    label: "Your age",
    description: "From 0 to 120, step is 1",
    placeholder: "Your age",
    max: 120,
    min: 0
  }), /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    mt: "md",
    label: "Your weight in kg",
    placeholder: "Your weight in kg",
    description: "From 0 to Infinity, step is 5",
    defaultValue: 80,
    step: 5,
    min: 0
  }));
}
const step = {
  type: "demo",
  code,
  component: Demo
};

exports.step = step;
//# sourceMappingURL=NumberInput.demo.step.js.map
