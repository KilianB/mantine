'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Button, TextInput, Group, rem } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        focusRingStyles: {
          // reset styles are applied to <button /> and <a /> elements
          // in &:focus:not(:focus-visible) selector to mimic
          // default browser behavior for native <button /> and <a /> elements
          resetStyles: () => ({ outline: 'none' }),

          // styles applied to all elements expect inputs based on Input component
          // styled are added with &:focus selector
          styles: (theme) => ({ outline: \`\${rem(2)} solid \${theme.colors.orange[5]}\` }),

          // focus styles applied to components that are based on Input
          // styled are added with &:focus selector
          inputStyles: (theme) => ({ outline: \`\${rem(2)} solid \${theme.colors.orange[5]}\` }),
        },
      }}
    >
      <Group grow>
        <Button>Move focus with tab</Button>
        <TextInput placeholder="Focus input to see styles override" />
      </Group>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: {
      focusRingStyles: {
        resetStyles: () => ({ outline: "none" }),
        styles: (theme) => ({ outline: `${core.rem(2)} solid ${theme.colors.orange[5]}` }),
        inputStyles: (theme) => ({ outline: `${core.rem(2)} solid ${theme.colors.orange[5]}` })
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    grow: true
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Move focus with tab"), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    placeholder: "Focus input to see styles override"
  })));
}
const focusRingStyles = {
  type: "demo",
  component: Demo,
  code
};

exports.focusRingStyles = focusRingStyles;
//# sourceMappingURL=Theme.demo.focusRingStyles.js.map
