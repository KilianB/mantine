import React from 'react';
import { Drawer, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
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
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, {
    opened,
    onClose: close,
    title: "Authentication"
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: open
  }, "Open Drawer")));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Drawer.demo.usage.js.map
