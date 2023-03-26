'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Autocomplete } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return <Autocomplete icon={<IconHash />} data={['React', 'Angular', 'Svelte', 'Vue']} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    maw: 320,
    mx: "auto",
    label: "Enter a hashtag",
    placeholder: "Enter a hashtag",
    data: ["React", "Angular", "Svelte", "Vue"],
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconHash, {
      size: core.rem(14)
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=Autocomplete.demo.icon.js.map
