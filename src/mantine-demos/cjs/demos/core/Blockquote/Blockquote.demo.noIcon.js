'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Blockquote } from '@mantine/core';

function Demo() {
  return (
    <Blockquote cite="\u2013 Your poor i3 from 2012 struggling its best" icon={null}>
      webpack built 40a9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  )
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Blockquote, {
    maw: 420,
    mx: "auto",
    cite: "\u2013 Your poor i3 from 2012 struggling its best",
    icon: null
  }, "webpack built 40a9bf3d1a0a0914ed84 in 28259ms");
}
const noIcon = {
  type: "demo",
  code,
  component: Demo
};

exports.noIcon = noIcon;
//# sourceMappingURL=Blockquote.demo.noIcon.js.map
