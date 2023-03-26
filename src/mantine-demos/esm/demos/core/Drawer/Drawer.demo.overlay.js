import React from 'react';
import { Drawer, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, {
    opened,
    onClose: close,
    title: "Authentication",
    overlayProps: { opacity: 0.5, blur: 4 }
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: open
  }, "Open drawer")));
}
const overlay = {
  type: "demo",
  code,
  component: Demo
};

export { overlay };
//# sourceMappingURL=Drawer.demo.overlay.js.map
