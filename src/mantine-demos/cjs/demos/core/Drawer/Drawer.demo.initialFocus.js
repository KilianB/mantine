'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Drawer, {
    opened,
    onClose: close,
    title: "Focus demo"
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "First input",
    placeholder: "First input"
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    "data-autofocus": true,
    label: "Input with initial focus",
    placeholder: "It has data-autofocus attribute",
    mt: "md"
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: open
  }, "Open drawer")));
}
const initialFocus = {
  type: "demo",
  code,
  component: Demo
};

exports.initialFocus = initialFocus;
//# sourceMappingURL=Drawer.demo.initialFocus.js.map
