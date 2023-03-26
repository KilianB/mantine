'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.NativeSelect, {
    maw: 320,
    mx: "auto",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled select",
    placeholder: "Pick one that you like",
    disabled: true
  });
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=NativeSelect.demo.disabled.js.map
