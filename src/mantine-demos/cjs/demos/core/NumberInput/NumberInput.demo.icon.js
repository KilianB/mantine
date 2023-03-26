'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NumberInput } from '@mantine/core';
import { IconMedal } from '@tabler/icons-react';

function Demo() {
  return (
    <NumberInput
      label="Age when you graduated"
      placeholder="Age when you graduated"
      defaultValue={22}
      min={0}
      max={120}
      icon={<IconMedal size="1rem" />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    maw: 320,
    mx: "auto",
    label: "Age when you graduated",
    placeholder: "Age when you graduated",
    defaultValue: 22,
    min: 0,
    max: 120,
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconMedal, {
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
//# sourceMappingURL=NumberInput.demo.icon.js.map
