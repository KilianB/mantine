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
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      hoverOnSearchChange
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    data: ["React", "Angular", "Svelte", "Vue"],
    hoverOnSearchChange: true
  }));
}
const hoverOnChange = {
  type: "demo",
  code,
  component: Demo
};

exports.hoverOnChange = hoverOnChange;
//# sourceMappingURL=Autocomplete.demo.hoverOnChange.js.map
