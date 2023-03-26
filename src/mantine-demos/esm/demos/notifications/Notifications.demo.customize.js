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
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.blue[6],
                borderColor: theme.colors.blue[6],

                '&::before': { backgroundColor: theme.white },
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.colors.blue[7] },
              },
            }),
          })
        }
      >
        Show customized notification
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
      message: "Hey there, your code is awesome! \u{1F925}",
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.blue[6],
          borderColor: theme.colors.blue[6],
          "&::before": { backgroundColor: theme.white }
        },
        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          "&:hover": { backgroundColor: theme.colors.blue[7] }
        }
      })
    })
  }, "Show customized notification"));
}
const customize = {
  type: "demo",
  code,
  component: Demo
};

export { customize };
//# sourceMappingURL=Notifications.demo.customize.js.map
