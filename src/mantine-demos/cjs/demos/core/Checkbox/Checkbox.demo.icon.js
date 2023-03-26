'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, className }) =>
  indeterminate ? <IconRadioactive className={className} /> : <IconBiohazard className={className} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`;
const CheckboxIcon = ({
  indeterminate,
  className
}) => indeterminate ? /* @__PURE__ */ React__default.createElement(iconsReact.IconRadioactive, {
  className
}) : /* @__PURE__ */ React__default.createElement(iconsReact.IconBiohazard, {
  className
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    icon: CheckboxIcon,
    label: "Custom icon",
    defaultChecked: true
  }), /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    icon: CheckboxIcon,
    label: "Custom icon: indeterminate",
    indeterminate: true,
    mt: "sm"
  }));
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

exports.icon = icon;
//# sourceMappingURL=Checkbox.demo.icon.js.map
