'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Mantine website
    </Highlight>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Highlight, {
    component: "a",
    href: "https://mantine.dev",
    target: "_blank",
    highlight: "mantine",
    fw: 500
  }, "Mantine website");
}
const props = {
  type: "demo",
  code,
  component: Demo
};

exports.props = props;
//# sourceMappingURL=Highlight.demo.props.js.map
