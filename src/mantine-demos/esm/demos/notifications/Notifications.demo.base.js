import React from 'react';
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const code = `
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! \u{1F925}',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => notifications.show({
      title: "Default notification",
      message: "Hey there, your code is awesome! \u{1F925}"
    })
  }, "Show notification"));
}
const base = {
  type: "demo",
  code,
  component: Demo
};

export { base };
//# sourceMappingURL=Notifications.demo.base.js.map
