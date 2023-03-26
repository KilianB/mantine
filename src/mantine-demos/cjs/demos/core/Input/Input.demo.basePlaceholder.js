'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input, InputBase } from '@mantine/core';

function Demo() {
  return (
    <InputBase component="button" label="Input base button with placeholder">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </InputBase>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.InputBase, {
    component: "button",
    label: "Input base button with placeholder"
  }, /* @__PURE__ */ React__default.createElement(core.Input.Placeholder, null, "Placeholder content"));
}
const basePlaceholder = {
  type: "demo",
  component: Demo,
  code
};

exports.basePlaceholder = basePlaceholder;
//# sourceMappingURL=Input.demo.basePlaceholder.js.map
