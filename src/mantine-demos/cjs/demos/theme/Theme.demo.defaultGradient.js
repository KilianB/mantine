'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient">Default gradient button</Button>
      <MantineProvider
        inherit
        theme={{
          defaultGradient: {
            from: 'orange',
            to: 'red',
            deg: 45,
          },
        }}
      >
        <Button variant="gradient">Gradient from provider</Button>
      </MantineProvider>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "gradient"
  }, "Default gradient button"), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: {
      defaultGradient: {
        from: "orange",
        to: "red",
        deg: 45
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "gradient"
  }, "Gradient from provider")));
}
const defaultGradient = {
  type: "demo",
  component: Demo,
  code
};

exports.defaultGradient = defaultGradient;
//# sourceMappingURL=Theme.demo.defaultGradient.js.map
