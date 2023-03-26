'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const items = core.MANTINE_COLORS.map((color) => /* @__PURE__ */ React__default.createElement(core.Badge, {
    key: color,
    color,
    variant: "dot"
  }, color));
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, items);
}
const dots = {
  type: "demo",
  component: Demo
};

exports.dots = dots;
//# sourceMappingURL=Badge.demo.dots.js.map
