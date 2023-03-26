import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => notifications.show({
      title: "Default notification",
      message: "Hey there, your code is awesome! \u{1F925}"
    })
  }, "Default"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "teal",
    onClick: () => notifications.show({
      color: "teal",
      title: "You did great",
      message: "Data was saved",
      icon: /* @__PURE__ */ React.createElement(IconCheck, {
        size: "1rem"
      })
    })
  }, "Teal with icon"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "red",
    onClick: () => notifications.show({
      color: "red",
      title: "Bummer!",
      message: "You have no right to do this"
    })
  }, "Red color"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "grape",
    onClick: () => notifications.show({
      color: "grape",
      title: "I will never close",
      message: "unless you click X",
      autoClose: false
    })
  }, "Never closes automatically"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "indigo",
    onClick: () => notifications.show({
      color: "indigo",
      title: "Custom autoClose timeout",
      message: "notification will be closed in 10 seconds",
      autoClose: 1e4
    })
  }, "10 seconds timeout"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "cyan",
    onClick: () => {
      notifications.show({
        id: "data-loading",
        color: "cyan",
        loading: true,
        title: "Loading your data",
        message: "Data will be loaded in 3 seconds, you cannot close this yet",
        autoClose: false,
        withCloseButton: false
      });
      setTimeout(() => {
        notifications.update({
          id: "data-loading",
          color: "teal",
          title: "Data was loaded",
          message: "Notification will close in 3 seconds, you can close this notification now",
          icon: /* @__PURE__ */ React.createElement(IconCheck, {
            size: "1rem"
          }),
          autoClose: 3e3
        });
      }, 3e3);
    }
  }, "Loading state and update"));
}
const root = {
  type: "demo",
  component: Demo
};

export { root };
//# sourceMappingURL=Notifications.demo.root.js.map
