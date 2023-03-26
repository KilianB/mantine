'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Rating, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Rating value={3.5} fractions={2} readOnly />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Rating, {
    value: 3.5,
    fractions: 2,
    readOnly: true
  }));
}
const readOnly = {
  type: "demo",
  component: Demo,
  code
};

exports.readOnly = readOnly;
//# sourceMappingURL=Rating.demo.readOnly.js.map
