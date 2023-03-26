'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput length={6} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.PinInput, {
    length: 6
  }));
}
const length = {
  type: "demo",
  component: Demo,
  code
};

exports.length = length;
//# sourceMappingURL=PinInput.demo.length.js.map
