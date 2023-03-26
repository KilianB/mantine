'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <Select
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size="1rem" />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "Pick a hashtag",
    placeholder: "Pick a hashtag",
    data: ["React", "Angular", "Svelte", "Vue"],
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconHash, {
      size: "1rem"
    }),
    withinPortal: true
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=Select.demo.icon.js.map
