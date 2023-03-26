'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, null, "Focus ring: ", /* @__PURE__ */ React__default.createElement(core.Code, null, "auto")), /* @__PURE__ */ React__default.createElement(core.Group, {
    mt: "xs"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xs"
  }, "Button 1"), /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xs"
  }, "Button 2")), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { focusRing: "always" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    mt: "lg"
  }, "Focus ring: ", /* @__PURE__ */ React__default.createElement(core.Code, null, "always")), /* @__PURE__ */ React__default.createElement(core.Group, {
    mt: "xs"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xs"
  }, "Button 1"), /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xs"
  }, "Button 2"))), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { focusRing: "never" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    mt: "lg"
  }, "Focus ring: ", /* @__PURE__ */ React__default.createElement(core.Code, null, "never")), /* @__PURE__ */ React__default.createElement(core.Group, {
    mt: "xs"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xs"
  }, "Button 1"), /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xs"
  }, "Button 2"))));
}
const focusRing = {
  type: "demo",
  component: Demo
};

exports.focusRing = focusRing;
//# sourceMappingURL=Theme.demo.focusRing.js.map
