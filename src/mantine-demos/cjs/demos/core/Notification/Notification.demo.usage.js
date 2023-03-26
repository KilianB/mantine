'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var _demoBase = require('./_demo-base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Notification title="Default notification">
        This is default notification with title and body
      </Notification>

      <Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification icon={<IconX size="1.1rem" />} color="red">
        Bummer! Notification without title
      </Notification>

      <Notification
        loading
        title="Uploading data to the server"
        withCloseButton={false}
      >
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Notification, {
    title: "Default notification",
    onClose: () => {
    }
  }, "This is default notification with title and body"), /* @__PURE__ */ React__default.createElement(core.Notification, {
    mt: "md",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
      size: "1.1rem"
    }),
    color: "teal",
    title: "Teal notification",
    onClose: () => {
    }
  }, "This is teal notification with icon"), /* @__PURE__ */ React__default.createElement(core.Notification, {
    mt: "md",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconX, {
      size: "1.1rem"
    }),
    color: "red",
    onClose: () => {
    }
  }, "Bummer! Notification without title"), /* @__PURE__ */ React__default.createElement(core.Notification, {
    mt: "md",
    loading: true,
    title: "Uploading data to the server",
    withCloseButton: false,
    onClose: () => {
    }
  }, "Please wait until data is uploaded, you cannot close this notification yet"));
}
const usage = __spreadProps(__spreadValues({}, _demoBase.demoBase), {
  type: "demo",
  code,
  component: Demo
});

exports.usage = usage;
//# sourceMappingURL=Notification.demo.usage.js.map
