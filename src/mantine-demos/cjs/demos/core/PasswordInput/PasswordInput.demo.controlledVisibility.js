'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack maw={380} mx="auto">
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}

`;
function Demo() {
  const [visible, { toggle }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(core.Stack, {
    maw: 380,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    label: "Password",
    defaultValue: "secret",
    visible,
    onVisibilityChange: toggle
  }), /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    label: "Confirm password",
    defaultValue: "secret",
    visible,
    onVisibilityChange: toggle
  }));
}
const controlledVisibility = {
  type: "demo",
  component: Demo,
  code
};

exports.controlledVisibility = controlledVisibility;
//# sourceMappingURL=PasswordInput.demo.controlledVisibility.js.map
