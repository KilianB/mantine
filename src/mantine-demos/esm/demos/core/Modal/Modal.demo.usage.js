import React from 'react';
import { Modal, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
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
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened,
    onClose: close,
    title: "Authentication"
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noShadow: true,
    noPadding: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: open
  }, "Open modal")));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Modal.demo.usage.js.map
