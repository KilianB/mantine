import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={Drawer.NativeScrollArea}
      >
        {content}
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
  const content = Array(100).fill(0).map((_, index) => /* @__PURE__ */ React.createElement("p", {
    key: index
  }, "Drawer with scroll"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, {
    opened,
    onClose: close,
    title: "Header is sticky",
    scrollAreaComponent: Drawer.NativeScrollArea
  }, content), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: open
  }, "Open drawer")));
}
const nativeScroll = {
  type: "demo",
  code,
  component: Demo
};

export { nativeScroll };
//# sourceMappingURL=Drawer.demo.nativeScroll.js.map
