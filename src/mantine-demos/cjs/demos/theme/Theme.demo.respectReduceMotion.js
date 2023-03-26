'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tooltip, Button, MantineProvider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="User settings are respected" transitionProps={{ transition: 'pop', duration: 300 }}>
        <Button>Respect user settings</Button>
      </Tooltip>
      <MantineProvider inherit theme={{ respectReducedMotion: false }}>
        <Tooltip label="User settings are disregarded" transitionProps={{ transition: 'pop', duration: 300 }}>
          <Button>Disregard user settings</Button>
        </Tooltip>
      </MantineProvider>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "User settings are respected",
    transitionProps: { transition: "pop", duration: 300 }
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Respect user settings")), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { respectReducedMotion: false }
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "User settings are disregarded",
    transitionProps: { transition: "pop", duration: 300 }
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Disregard user settings"))));
}
const respectReduceMotion = {
  type: "demo",
  component: Demo,
  code
};

exports.respectReduceMotion = respectReduceMotion;
//# sourceMappingURL=Theme.demo.respectReduceMotion.js.map
