'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var _data = require('./_data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      rightSection={<IconChevronDown size="1rem" />}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSectionWidth={40}
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
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronDown, {
      size: "1rem"
    }),
    styles: { rightSection: { pointerEvents: "none" } },
    rightSectionWidth: 40
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

exports.rightSection = rightSection;
//# sourceMappingURL=MultiSelect.demo.rightSection.js.map
