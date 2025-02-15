'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _data = require('./_data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return <MultiSelect disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    data: _data.data,
    label: "Disabled without value",
    placeholder: "Won't pick anything",
    disabled: true,
    defaultValue: []
  }), /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    mt: "md",
    data: _data.data,
    label: "Disabled with values",
    placeholder: "Won't pick anything",
    disabled: true,
    defaultValue: ["react", "vue"]
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=MultiSelect.demo.disabled.js.map
