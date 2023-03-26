'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Custom layout",
    placeholder: "Custom layout",
    description: "Description below the input",
    inputWrapperOrder: ["label", "error", "input", "description"]
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    mt: "xl",
    label: "Custom layout",
    placeholder: "Custom layout",
    description: "Error and description are",
    error: "both below the input",
    inputWrapperOrder: ["label", "input", "description", "error"]
  }));
}
const order = {
  type: "demo",
  component: Demo,
  code
};

exports.order = order;
//# sourceMappingURL=Input.demo.order.js.map
