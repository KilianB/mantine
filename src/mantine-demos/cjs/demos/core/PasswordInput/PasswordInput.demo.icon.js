'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PasswordInput } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size="1rem" />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    maw: 320,
    mx: "auto",
    label: "Your password",
    placeholder: "Your password",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconLock, {
      size: "1rem"
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=PasswordInput.demo.icon.js.map
