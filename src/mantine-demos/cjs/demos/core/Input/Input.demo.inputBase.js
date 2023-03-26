'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var reactImask = require('react-imask');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <Box maw={320} mx="auto">
    <InputBase label="Your phone" component={IMaskInput} mask="+7 (000) 000-0000" />
      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.InputBase, {
    label: "Your phone",
    component: reactImask.IMaskInput,
    mask: "+7 (000) 000-0000"
  }), /* @__PURE__ */ React__default.createElement(core.InputBase, {
    label: "Custom native select",
    component: "select",
    mt: "md"
  }, /* @__PURE__ */ React__default.createElement("option", {
    value: "react"
  }, "React"), /* @__PURE__ */ React__default.createElement("option", {
    value: "react"
  }, "Angular"), /* @__PURE__ */ React__default.createElement("option", {
    value: "svelte"
  }, "Svelte")));
}
const inputBase = {
  type: "demo",
  component: Demo,
  code
};

exports.inputBase = inputBase;
//# sourceMappingURL=Input.demo.inputBase.js.map
