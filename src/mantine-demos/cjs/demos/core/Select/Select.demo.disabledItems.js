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
      label="Select with disabled items"
      placeholder="Select something"
      data={[
        { value: 'react', label: 'React', disabled: true },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "Select with disabled items",
    placeholder: "Select something",
    withinPortal: true,
    data: [
      { value: "react", label: "React", disabled: true },
      { value: "ng", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
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
//# sourceMappingURL=Select.demo.disabledItems.js.map
