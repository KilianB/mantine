'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          notifications.show({
            id: 'load-data',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            withCloseButton: false,
          });

          setTimeout(() => {
            notifications.update({
              id: 'load-data',
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 2 seconds, you can close this notification now',
              icon: <IconCheck size="1rem" />,
              autoClose: 2000,
            });
          }, 3000);
        }}
      >
        Show update notification
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => {
      notifications.notifications.show({
        id: "load-data",
        loading: true,
        title: "Loading your data",
        message: "Data will be loaded in 3 seconds, you cannot close this yet",
        autoClose: false,
        withCloseButton: false
      });
      setTimeout(() => {
        notifications.notifications.update({
          id: "load-data",
          color: "teal",
          title: "Data was loaded",
          message: "Notification will close in 2 seconds, you can close this notification now",
          icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
            size: "1rem"
          }),
          autoClose: 2e3
        });
      }, 3e3);
    }
  }, "Show update notification"));
}
const update = {
  type: "demo",
  code,
  component: Demo
};

exports.update = update;
//# sourceMappingURL=Notifications.demo.update.js.map
