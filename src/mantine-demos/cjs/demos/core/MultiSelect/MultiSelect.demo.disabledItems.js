'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="MultiSelect with disabled items"
      placeholder="Select items"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue', disabled: true },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    maw: 400,
    mx: "auto",
    label: "MultiSelect with disabled items",
    placeholder: "Select items",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue", disabled: true }
    ]
  });
}
const disabledItems = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.disabledItems = disabledItems;
//# sourceMappingURL=MultiSelect.demo.disabledItems.js.map
