'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => notifications.notifications.show({
      title: "Default notification",
      message: "Hey there, your code is awesome! \u{1F925}"
    })
  }, "Default"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "teal",
    onClick: () => notifications.notifications.show({
      color: "teal",
      title: "You did great",
      message: "Data was saved",
      icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
        size: "1rem"
      })
    })
  }, "Teal with icon"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "red",
    onClick: () => notifications.notifications.show({
      color: "red",
      title: "Bummer!",
      message: "You have no right to do this"
    })
  }, "Red color"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "grape",
    onClick: () => notifications.notifications.show({
      color: "grape",
      title: "I will never close",
      message: "unless you click X",
      autoClose: false
    })
  }, "Never closes automatically"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "indigo",
    onClick: () => notifications.notifications.show({
      color: "indigo",
      title: "Custom autoClose timeout",
      message: "notification will be closed in 10 seconds",
      autoClose: 1e4
    })
  }, "10 seconds timeout"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "cyan",
    onClick: () => {
      notifications.notifications.show({
        id: "data-loading",
        color: "cyan",
        loading: true,
        title: "Loading your data",
        message: "Data will be loaded in 3 seconds, you cannot close this yet",
        autoClose: false,
        withCloseButton: false
      });
      setTimeout(() => {
        notifications.notifications.update({
          id: "data-loading",
          color: "teal",
          title: "Data was loaded",
          message: "Notification will close in 3 seconds, you can close this notification now",
          icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
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

exports.root = root;
//# sourceMappingURL=Notifications.demo.root.js.map
