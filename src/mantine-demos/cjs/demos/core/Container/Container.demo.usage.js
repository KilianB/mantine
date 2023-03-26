'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Container } from '@mantine/core';

function Demo() {
  return (
    <>
      <Container>
        Default container
      </Container>

      <Container size="xs" px="xs">
        xs container with xs horizontal padding
      </Container>

      <Container size="30rem" px={0}>
        30rem container with 0 horizontal padding
      </Container>
    </>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const color = theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[0];
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Container, {
    bg: color,
    h: 50
  }, "Default container"), /* @__PURE__ */ React__default.createElement(core.Container, {
    size: "xs",
    px: "xs",
    bg: color,
    h: 50,
    mt: 20
  }, "xs container with xs horizontal padding"), /* @__PURE__ */ React__default.createElement(core.Container, {
    size: "30rem",
    px: 0,
    bg: color,
    h: 50,
    mt: 20
  }, "30rem container with 0 horizontal padding"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Container.demo.usage.js.map
