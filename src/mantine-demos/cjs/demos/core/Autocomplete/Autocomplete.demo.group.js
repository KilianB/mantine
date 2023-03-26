'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'Rick', group: 'Used to be a pickle' },
        { value: 'Morty', group: 'Never was a pickle' },
        { value: 'Beth', group: 'Never was a pickle' },
        { value: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    maw: 320,
    mx: "auto",
    label: "Your favorite Rick and Morty character",
    placeholder: "Pick one",
    data: [
      { value: "Rick", group: "Used to be a pickle" },
      { value: "Morty", group: "Never was a pickle" },
      { value: "Beth", group: "Never was a pickle" },
      { value: "Summer", group: "Never was a pickle" }
    ]
  });
}
const group = {
  type: "demo",
  code,
  component: Demo
};

exports.group = group;
//# sourceMappingURL=Autocomplete.demo.group.js.map
