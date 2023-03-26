'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <Select
      data={data}
      label="Select with native scrollbars"
      placeholder="Dropdown with native scrollbars"
      dropdownComponent="div"
    />
  );
}
`;
const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    data,
    label: "Select with native scrollbars",
    placeholder: "Dropdown with native scrollbars",
    dropdownComponent: "div",
    withinPortal: true
  });
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

exports.scrollbars = scrollbars;
//# sourceMappingURL=Select.demo.scrollbars.js.map
