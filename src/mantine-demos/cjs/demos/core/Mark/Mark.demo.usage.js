'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Mantine</Mark>, you are awesome!
    </Text>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Text, null, "Thanks for stopping by and checking out ", /* @__PURE__ */ React__default.createElement(core.Mark, null, "Mantine"), ", you are awesome!");
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Mark.demo.usage.js.map
