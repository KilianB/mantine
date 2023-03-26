'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronDown, {
      size: "1rem"
    }),
    rightSectionWidth: 30,
    styles: { rightSection: { pointerEvents: "none" } },
    data: ["React", "Angular", "Svelte", "Vue"],
    withinPortal: true
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

exports.rightSection = rightSection;
//# sourceMappingURL=Select.demo.rightSection.js.map
