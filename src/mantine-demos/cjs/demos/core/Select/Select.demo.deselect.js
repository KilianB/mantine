'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return <Select allowDeselect />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    allowDeselect: true,
    withinPortal: true,
    defaultValue: "react",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  });
}
const deselect = {
  type: "demo",
  code,
  component: Demo
};

exports.deselect = deselect;
//# sourceMappingURL=Select.demo.deselect.js.map
