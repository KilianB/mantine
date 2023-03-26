'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox checked={false} label="Default checkbox" />
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked indeterminate label="Indeterminate checked checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stack, null, /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    checked: false,
    label: "Default checkbox"
  }), /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    checked: false,
    indeterminate: true,
    label: "Indeterminate checkbox"
  }), /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    checked: true,
    indeterminate: true,
    label: "Indeterminate checked checkbox"
  }), /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    checked: true,
    label: "Checked checkbox"
  }), /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    disabled: true,
    label: "Disabled checkbox"
  }), /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    disabled: true,
    checked: true,
    label: "Disabled checked checkbox"
  }), /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    disabled: true,
    indeterminate: true,
    label: "Disabled indeterminate checkbox"
  }));
}
const states = {
  type: "demo",
  component: Demo,
  code
};

exports.states = states;
//# sourceMappingURL=Checkbox.demo.states.js.map
