'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, Loader } from '@mantine/core';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.TextInput, {
    maw: 320,
    mx: "auto",
    label: "Your email",
    placeholder: "Your email",
    defaultValue: "asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb",
    rightSection: /* @__PURE__ */ React__default.createElement(core.Loader, {
      size: "xs"
    })
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

exports.rightSection = rightSection;
//# sourceMappingURL=TextInput.demo.rightSection.js.map
