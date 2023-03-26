'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Wrapper({ primaryShade: primaryShade2 }) {
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { primaryShade: primaryShade2 }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "filled"
  }, "Filled button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "light"
  }, "Light button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Outline button")));
}
const codeTemplate = (props) => `
import { MantineProvider, Group, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props.replace(" primaryShade={", "").replace("}", "")} }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </MantineProvider>
  );
}
`;
const primaryShade = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: "primaryShade", type: "number", initialValue: 6, min: 0, max: 9 }]
};

exports.primaryShade = primaryShade;
//# sourceMappingURL=Theme.demo.primaryShade.js.map
