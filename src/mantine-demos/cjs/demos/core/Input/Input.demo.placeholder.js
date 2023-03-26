'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Input, {
    component: "button"
  }, /* @__PURE__ */ React__default.createElement(core.Input.Placeholder, null, "Placeholder content"));
}
const placeholder = {
  type: "demo",
  component: Demo,
  code
};

exports.placeholder = placeholder;
//# sourceMappingURL=Input.demo.placeholder.js.map
