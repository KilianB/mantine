import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={Modal.NativeScrollArea}
      >
        {content}
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
  const content = Array(100).fill(0).map((_, index) => /* @__PURE__ */ React.createElement("p", {
    key: index
  }, "Modal with scroll"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened,
    onClose: close,
    title: "Header is sticky",
    scrollAreaComponent: Modal.NativeScrollArea
  }, content), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: open
  }, "Open modal")));
}
const nativeScroll = {
  type: "demo",
  code,
  component: Demo
};

export { nativeScroll };
//# sourceMappingURL=Modal.demo.nativeScroll.js.map
