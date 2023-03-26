'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect } from '@mantine/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="MultiSelect with native scrollbars"
      placeholder="Dropdown rendered as div element"
      dropdownComponent="div"
    />
  );
}
`;
const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    maw: 320,
    mx: "auto",
    data,
    label: "MultiSelect with native scrollbars",
    placeholder: "Dropdown rendered as div element",
    dropdownComponent: "div"
  });
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

exports.scrollbars = scrollbars;
//# sourceMappingURL=MultiSelect.demo.scrollbars.js.map
