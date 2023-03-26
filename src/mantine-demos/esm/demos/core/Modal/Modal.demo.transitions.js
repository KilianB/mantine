import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group position="center">
        <Button onClick={() => setSlowTransitionOpened(true)} color="pink">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened: slowTransitionOpened,
    onClose: () => setSlowTransitionOpened(false),
    title: "Please consider this",
    transitionProps: { transition: "rotate-left" }
  }, "rotate-left transition"), /* @__PURE__ */ React.createElement(Modal, {
    opened: noTransitionOpened,
    onClose: () => setNoTransitionOpened(false),
    title: "Please consider this",
    transitionProps: { transition: "fade", duration: 600, timingFunction: "linear" }
  }, "fade transition 600ms linear transition"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setSlowTransitionOpened(true),
    color: "pink"
  }, "Rotate left transition"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setNoTransitionOpened(true),
    color: "cyan"
  }, "Fade transition")));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=Modal.demo.transitions.js.map
