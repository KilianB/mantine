'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened,
    onClose: close,
    title: "Authentication",
    overlayProps: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
      opacity: 0.55,
      blur: 3
    }
  }, /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: open
  }, "Open modal")));
}
const overlay = {
  type: "demo",
  code,
  component: Demo
};

exports.overlay = overlay;
//# sourceMappingURL=Modal.demo.overlay.js.map
