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
      label="Your favorite framework/library"
      placeholder="Pick one"
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      searchable
      hoverOnSearchChange
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    nothingFound: "No options",
    data: ["React", "Angular", "Svelte", "Vue"],
    withinPortal: true,
    searchable: true,
    hoverOnSearchChange: true
  }));
}
const hoverOnSearchChange = {
  type: "demo",
  code,
  component: Demo
};

exports.hoverOnSearchChange = hoverOnSearchChange;
//# sourceMappingURL=Select.demo.hoverOnSearchChange.js.map
