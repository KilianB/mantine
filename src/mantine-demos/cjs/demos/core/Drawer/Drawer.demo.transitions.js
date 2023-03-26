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
import { Drawer, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
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
    title: "Authentication",
    transitionProps: { transition: "rotate-left", duration: 150, timingFunction: "linear" }
  }, /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: open
  }, "Open Drawer")));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

exports.transitions = transitions;
//# sourceMappingURL=Drawer.demo.transitions.js.map
