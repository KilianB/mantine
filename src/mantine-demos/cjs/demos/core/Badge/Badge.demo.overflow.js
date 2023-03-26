'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge, Box, Flex } from '@mantine/core';

function Demo() {
  return (
    <Flex>
      <Box w={200}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </Box>

      <Box w={120} ml="md">
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </Box>
    </Flex>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Flex, null, /* @__PURE__ */ React__default.createElement(core.Box, {
    w: 200
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "filled",
    fullWidth: true
  }, "Full width badge")), /* @__PURE__ */ React__default.createElement(core.Box, {
    w: 120,
    ml: "md"
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "filled",
    fullWidth: true
  }, "Badge with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

exports.overflow = overflow;
//# sourceMappingURL=Badge.demo.overflow.js.map
