import React from 'react';
import { IconGitPullRequest, IconAlertCircle, IconMessages, IconDatabase } from '@tabler/icons-react';
import { UnstyledButton, Group, ThemeIcon, Text } from '@mantine/core';

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
function MainLink({ icon, color, label }) {
  return /* @__PURE__ */ React.createElement(UnstyledButton, {
    sx: (theme) => ({
      display: "block",
      width: "100%",
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
      }
    })
  }, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(ThemeIcon, {
    color,
    variant: "light"
  }, icon), /* @__PURE__ */ React.createElement(Text, {
    size: "sm"
  }, label)));
}
const data = [
  { icon: /* @__PURE__ */ React.createElement(IconGitPullRequest, {
    size: "1rem"
  }), color: "blue", label: "Pull Requests" },
  { icon: /* @__PURE__ */ React.createElement(IconAlertCircle, {
    size: "1rem"
  }), color: "teal", label: "Open Issues" },
  { icon: /* @__PURE__ */ React.createElement(IconMessages, {
    size: "1rem"
  }), color: "violet", label: "Discussions" },
  { icon: /* @__PURE__ */ React.createElement(IconDatabase, {
    size: "1rem"
  }), color: "grape", label: "Databases" }
];
function MainLinks() {
  const links = data.map((link) => /* @__PURE__ */ React.createElement(MainLink, __spreadProps(__spreadValues({}, link), {
    key: link.label
  })));
  return /* @__PURE__ */ React.createElement("div", null, links);
}

export { MainLinks };
//# sourceMappingURL=_mainLinks.js.map
