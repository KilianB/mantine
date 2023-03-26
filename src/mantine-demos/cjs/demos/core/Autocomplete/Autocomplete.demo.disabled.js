'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return <Autocomplete disabled data={['React', 'Angular', 'Svelte', 'Vue']} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled without value",
    placeholder: "Pick all that you like",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    mt: "md",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled with value",
    placeholder: "Pick all that you like",
    disabled: true,
    value: "React"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=Autocomplete.demo.disabled.js.map
