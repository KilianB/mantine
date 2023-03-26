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
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      defaultValue={['react', 'next']}
      clearButtonProps={{ 'aria-label': 'Clear selection' }}
      clearable
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    maw: 400,
    mx: "auto",
    data: _data.data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    defaultValue: ["react", "next"],
    clearButtonProps: { "aria-label": "Clear selection" },
    clearable: true
  });
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

exports.clearable = clearable;
//# sourceMappingURL=MultiSelect.demo.clearable.js.map
