'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => notifications.notifications.show({
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

exports.customize = customize;
//# sourceMappingURL=Notifications.demo.customize.js.map
