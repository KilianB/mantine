'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Only 2 options at a time"
      placeholder="Your favorite framework"
      limit={2}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    maw: 320,
    mx: "auto",
    label: "Only 2 options at a time",
    placeholder: "Your favorite framework",
    limit: 2,
    data: ["React", "Angular", "Svelte", "Vue"]
  });
}
const limit = {
  type: "demo",
  code,
  component: Demo
};

exports.limit = limit;
//# sourceMappingURL=Autocomplete.demo.limit.js.map
