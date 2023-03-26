import React from 'react';
import { useMantineTheme, Group, Text } from '@mantine/core';
import { IconUpload, IconX, IconPhoto } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

var __defProp = Object.defineProperty;
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
function DropzoneDemoChildren() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    spacing: "xl",
    mih: 220,
    sx: { pointerEvents: "none" }
  }, /* @__PURE__ */ React.createElement(Dropzone.Accept, null, /* @__PURE__ */ React.createElement(IconUpload, {
    size: "3.2rem",
    stroke: 1.5,
    color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]
  })), /* @__PURE__ */ React.createElement(Dropzone.Reject, null, /* @__PURE__ */ React.createElement(IconX, {
    size: "3.2rem",
    stroke: 1.5,
    color: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
  })), /* @__PURE__ */ React.createElement(Dropzone.Idle, null, /* @__PURE__ */ React.createElement(IconPhoto, {
    size: "3.2rem",
    stroke: 1.5
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, {
    size: "xl",
    inline: true
  }, "Drag images here or click to select files"), /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    color: "dimmed",
    inline: true,
    mt: 7
  }, "Attach as many files as you like, each file should not exceed 5mb")));
}
function BaseDemo(props) {
  return /* @__PURE__ */ React.createElement(Dropzone, __spreadValues({
    onDrop: (files) => console.log("accepted files", files),
    onReject: (files) => console.log("rejected files", files),
    maxSize: 3 * 1024 ** 2,
    accept: IMAGE_MIME_TYPE
  }, props), /* @__PURE__ */ React.createElement(DropzoneDemoChildren, null));
}

export { BaseDemo, DropzoneDemoChildren };
//# sourceMappingURL=_base.js.map
