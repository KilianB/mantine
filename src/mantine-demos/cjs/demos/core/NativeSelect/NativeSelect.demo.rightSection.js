'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NativeSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <NativeSelect
      label="Your favorite library/framework"
      placeholder="Your favorite library/framework"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={40}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.NativeSelect, {
    maw: 320,
    mx: "auto",
    label: "Your favorite library/framework",
    placeholder: "Your favorite library/framework",
    data: ["React", "Angular", "Svelte", "Vue"],
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronDown, {
      size: "1rem"
    }),
    rightSectionWidth: 30
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

exports.rightSection = rightSection;
//# sourceMappingURL=NativeSelect.demo.rightSection.js.map
