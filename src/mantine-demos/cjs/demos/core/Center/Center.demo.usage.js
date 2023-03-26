'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Center } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} mx="auto">
      <div>All elements inside Center are centered</div>
    </Center>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Center, {
    maw: 400,
    h: 100,
    mx: "auto",
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.blue[0]
    })
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[1]
    })
  }, "All elements inside Center are centered"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Center.demo.usage.js.map
