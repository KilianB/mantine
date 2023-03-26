'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
        { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
        { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
        { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite Rick and Morty character",
    placeholder: "Pick one",
    withinPortal: true,
    data: [
      { value: "rick", label: "Rick", group: "Used to be a pickle" },
      { value: "morty", label: "Morty", group: "Never was a pickle" },
      { value: "beth", label: "Beth", group: "Never was a pickle" },
      { value: "summer", label: "Summer", group: "Never was a pickle" }
    ]
  });
}
const group = {
  type: "demo",
  code,
  component: Demo
};

exports.group = group;
//# sourceMappingURL=Select.demo.group.js.map
