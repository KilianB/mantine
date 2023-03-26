'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Text, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack align="flex-start">
      <Text color="blue.3">Text with theme.colors.blue[3] color</Text>
      <Button color="pink.4">Button with theme.colors.pink[4] color</Button>
    </Stack>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stack, {
    align: "flex-start"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "blue.3"
  }, "Text with theme.colors.blue[3] color"), /* @__PURE__ */ React__default.createElement(core.Button, {
    color: "pink.4"
  }, "Button with theme.colors.pink[4] color"));
}
const colorsIndex = {
  type: "demo",
  component: Demo,
  code
};

exports.colorsIndex = colorsIndex;
//# sourceMappingURL=Theme.demo.colorsIndex.js.map
