'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var prism = require('@mantine/prism');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
import { Prism } from '@mantine/prism';

function Demo() {
  return (
    <>
      <Prism noCopy language="tsx">{/* ...code */}</Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
      >
        {/* ...code */}
      </Prism>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    noCopy: true
  }, demoCode), /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    copyLabel: "Copy code to clipboard",
    copiedLabel: "Code copied to clipboard",
    mt: "lg"
  }, demoCode));
}
const copyLabel = {
  type: "demo",
  component: Demo,
  code
};

exports.copyLabel = copyLabel;
//# sourceMappingURL=Prism.demo.copyLabel.js.map
