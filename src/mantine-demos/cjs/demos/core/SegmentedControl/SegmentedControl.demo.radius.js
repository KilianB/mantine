'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Wrapper = require('./Wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const items = core.MANTINE_SIZES.map((size, index) => /* @__PURE__ */ React__default.createElement(core.Box, {
    mt: index === 0 ? void 0 : "md",
    key: size
  }, /* @__PURE__ */ React__default.createElement(Wrapper.SegmentedControlWrapper, {
    size: "lg",
    radius: size
  })));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, items);
}
const radius = {
  type: "demo",
  component: Demo
};

exports.radius = radius;
//# sourceMappingURL=SegmentedControl.demo.radius.js.map
