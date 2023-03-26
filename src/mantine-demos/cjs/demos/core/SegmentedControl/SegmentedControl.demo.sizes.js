'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const items = core.MANTINE_SIZES.map((size, index) => /* @__PURE__ */ React__default.createElement(core.Box, {
    mt: index === 0 ? void 0 : 15,
    key: size
  }, /* @__PURE__ */ React__default.createElement(core.SegmentedControl, {
    size,
    data: ["React", "Angular", "Vue"]
  })));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, items);
}
const sizes = {
  type: "demo",
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=SegmentedControl.demo.sizes.js.map
