'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Code, null, "React.createElement()");
}
const inline = {
  type: "demo",
  code,
  component: Demo
};

exports.inline = inline;
//# sourceMappingURL=Code.demo.inline.js.map
