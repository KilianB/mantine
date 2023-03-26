'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var spotlight = require('@mantine/spotlight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SpotlightControl({ buttonLabel }) {
  const spotlight$1 = spotlight.useSpotlight();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: spotlight$1.openSpotlight
  }, buttonLabel || "Open spotlight"));
}

exports.SpotlightControl = SpotlightControl;
//# sourceMappingURL=_control.js.map
