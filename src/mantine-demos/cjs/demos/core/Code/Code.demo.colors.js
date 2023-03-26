'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Code } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Code, {
    color: "red"
  }, "React.createElement()"), /* @__PURE__ */ React__default.createElement(core.Code, {
    color: "teal"
  }, "React.createElement()"), /* @__PURE__ */ React__default.createElement(core.Code, {
    color: "blue"
  }, "React.createElement()"));
}
const colors = {
  type: "demo",
  code,
  component: Demo
};

exports.colors = colors;
//# sourceMappingURL=Code.demo.colors.js.map
