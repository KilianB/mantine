import React from 'react';
import { Modal, TextInput, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
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
    title: "Focus demo"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "First input",
    placeholder: "First input"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    "data-autofocus": true,
    label: "Input with initial focus",
    placeholder: "It has data-autofocus attribute",
    mt: "md"
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: open
  }, "Open modal")));
}
const initialFocus = {
  type: "demo",
  code,
  component: Demo
};

export { initialFocus };
//# sourceMappingURL=Modal.demo.initialFocus.js.map
