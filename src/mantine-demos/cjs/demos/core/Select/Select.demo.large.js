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
      label="What item is the best?"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      maxDropdownHeight={280}
      data={data}
    />
  );
}
`;
function Demo() {
  const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "What item is the best?",
    placeholder: "Pick one",
    searchable: true,
    nothingFound: "No options",
    maxDropdownHeight: 280,
    withinPortal: true,
    data
  });
}
const large = {
  type: "demo",
  code,
  component: Demo
};

exports.large = large;
//# sourceMappingURL=Select.demo.large.js.map
