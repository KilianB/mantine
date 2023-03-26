'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" icon={<IconAt size="0.8rem" />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.TextInput, {
    maw: 320,
    mx: "auto",
    label: "Your email",
    placeholder: "Your email",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconAt, {
      size: "0.8rem"
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=TextInput.demo.icon.js.map
