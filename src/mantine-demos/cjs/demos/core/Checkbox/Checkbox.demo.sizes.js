'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const items = core.MANTINE_SIZES.map((size) => /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    key: size,
    size,
    defaultChecked: true,
    label: `${size} checkbox`
  }));
  return /* @__PURE__ */ React__default.createElement(core.Stack, {
    spacing: "sm"
  }, items);
}
const sizes = {
  type: "demo",
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=Checkbox.demo.sizes.js.map
