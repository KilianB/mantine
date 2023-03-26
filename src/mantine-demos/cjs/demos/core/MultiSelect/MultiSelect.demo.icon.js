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
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return <MultiSelect icon={<IconHash />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    maw: 400,
    mx: "auto",
    data: _data.data,
    label: "Pick hashtags",
    placeholder: "Pick all that you like",
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
//# sourceMappingURL=MultiSelect.demo.icon.js.map
