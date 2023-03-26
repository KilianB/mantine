import React from 'react';
import { Group, Button } from '@mantine/core';
import { modals } from '@mantine/modals';

const code = `
import { Button, Group } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() =>
          modals.openContextModal({
            modal: 'demonstration',
            title: 'Test modal from context',
            innerProps: {
              modalBody:
                'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
            },
          })
        }
      >
        Open demonstration context modal
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => modals.openContextModal({
      modal: "demonstration",
      title: "Test modal from context",
      innerProps: {
        modalBody: "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"
      }
    })
  }, "Open demonstration context modal"));
}
const context = {
  type: "demo",
  component: Demo,
  code
};

export { context };
//# sourceMappingURL=Modals.demo.context.js.map
