'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft size={rem(14)} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(core.Anchor, {
    href: "https://mantine.dev",
    target: "_blank"
  }, /* @__PURE__ */ React__default.createElement(core.Center, {
    inline: true
  }, theme.dir === "ltr" ? /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowLeft, {
    size: core.rem(14)
  }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowRight, {
    size: core.rem(14)
  }), /* @__PURE__ */ React__default.createElement(core.Box, {
    ml: 5
  }, "Back to Mantine website")));
}
const inline = {
  type: "demo",
  code,
  component: Demo
};

exports.inline = inline;
//# sourceMappingURL=Center.demo.inline.js.map
