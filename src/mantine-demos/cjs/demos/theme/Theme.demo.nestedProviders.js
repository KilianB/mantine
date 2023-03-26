'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `import { Button, MantineProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text align="center" mb="xs">Georgia or serif text</Text>

      <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
      </MantineProvider>
    </MantineProvider>
  );
}`;
function Demo() {
  const { colorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    theme: { fontFamily: "Georgia, serif", colorScheme }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center",
    mb: "xs"
  }, "Georgia or serif text"), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    theme: { fontFamily: "Greycliff CF, sans-serif", colorScheme }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Greycliff CF button"))));
}
const nestedProviders = {
  type: "demo",
  component: Demo,
  code
};

exports.nestedProviders = nestedProviders;
//# sourceMappingURL=Theme.demo.nestedProviders.js.map
