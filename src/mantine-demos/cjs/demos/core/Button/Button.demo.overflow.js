'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Flex, Box } from '@mantine/core';

function Demo() {
  return (
    <Flex gap="md">
      <Box w={200}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </Box>

      <Box w={140}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </Box>
    </Flex>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Flex, {
    gap: "md"
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    w: 200
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    fullWidth: true,
    variant: "outline"
  }, "Full width button")), /* @__PURE__ */ React__default.createElement(core.Box, {
    w: 140
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    fullWidth: true,
    variant: "outline"
  }, "Button with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

exports.overflow = overflow;
//# sourceMappingURL=Button.demo.overflow.js.map
