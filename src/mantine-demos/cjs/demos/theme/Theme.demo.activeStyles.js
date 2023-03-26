'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Button>Press me</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { activeStyles: { transform: "scale(0.95)" } }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Press me")));
}
const activeStyles = {
  type: "demo",
  component: Demo,
  code
};

exports.activeStyles = activeStyles;
//# sourceMappingURL=Theme.demo.activeStyles.js.map
