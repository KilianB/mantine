'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened,
    onClose: close,
    title: "This is a fullscreen modal",
    fullScreen: true,
    transitionProps: { transition: "fade", duration: 200 }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    mb: "xl"
  }, "It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."), /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: open
  }, "Open Modal")));
}
const fullScreen = {
  type: "demo",
  code,
  component: Demo
};

exports.fullScreen = fullScreen;
//# sourceMappingURL=Modal.demo.fullScreen.js.map
