'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch onLabel="ON" offLabel="OFF" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Switch, {
    size: "xs",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React__default.createElement(core.Switch, {
    size: "sm",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React__default.createElement(core.Switch, {
    size: "md",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React__default.createElement(core.Switch, {
    size: "lg",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React__default.createElement(core.Switch, {
    size: "xl",
    onLabel: "ON",
    offLabel: "OFF"
  }));
}
const labels = {
  type: "demo",
  component: Demo,
  code
};

exports.labels = labels;
//# sourceMappingURL=Switch.demo.labels.js.map
