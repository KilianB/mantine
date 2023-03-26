'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, null, "Loader: ", /* @__PURE__ */ React__default.createElement(core.Code, null, "oval")), /* @__PURE__ */ React__default.createElement(core.Loader, null), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { loader: "bars" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    mt: "lg"
  }, "Loader: ", /* @__PURE__ */ React__default.createElement(core.Code, null, "bars")), /* @__PURE__ */ React__default.createElement(core.Loader, null)), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { loader: "dots" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    mt: "lg"
  }, "Loader: ", /* @__PURE__ */ React__default.createElement(core.Code, null, "dots")), /* @__PURE__ */ React__default.createElement(core.Loader, null)));
}
const loader = {
  type: "demo",
  component: Demo
};

exports.loader = loader;
//# sourceMappingURL=Theme.demo.loader.js.map
