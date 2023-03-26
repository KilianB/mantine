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
    <>
      <Select clearable />
      <Select searchable clearable />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    withinPortal: true,
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }), /* @__PURE__ */ React__default.createElement(core.Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    searchable: true,
    withinPortal: true,
    mt: "md",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }));
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

exports.clearable = clearable;
//# sourceMappingURL=Select.demo.clearable.js.map
