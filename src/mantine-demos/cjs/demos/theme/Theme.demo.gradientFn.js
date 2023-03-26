'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Center, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider inherit theme={{ defaultGradient: { from: 'blue', to: 'teal', deg: 20 } }}>
      <Group position="center" grow>
        <Center
          sx={(theme) => ({
            height: '${core.rem(40)}',
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })}
        >
          Default gradient
        </Center>

        <Center
          sx={(theme) => ({
            height: '${core.rem(40)}',
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'orange', deg: 45 }),
            color: theme.white,
          })}
        >
          Custom gradient
        </Center>
      </Group>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { defaultGradient: { from: "blue", to: "teal", deg: 20 } }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    grow: true
  }, /* @__PURE__ */ React__default.createElement(core.Center, {
    sx: (theme) => ({
      height: core.rem(40),
      backgroundImage: theme.fn.gradient(),
      color: theme.white
    })
  }, "Default gradient"), /* @__PURE__ */ React__default.createElement(core.Center, {
    sx: (theme) => ({
      height: core.rem(40),
      backgroundImage: theme.fn.gradient({ from: "red", to: "orange", deg: 45 }),
      color: theme.white
    })
  }, "Custom gradient")));
}
const gradientFn = {
  type: "demo",
  component: Demo,
  code
};

exports.gradientFn = gradientFn;
//# sourceMappingURL=Theme.demo.gradientFn.js.map
