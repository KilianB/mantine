import React from 'react';
import { Group, Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Avatar, __spreadValues({}, props)));
}
const codeTemplate = (props) => `
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar${props} />;
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "variant",
      type: "segmented",
      initialValue: "light",
      defaultValue: "light",
      data: [
        { label: "light", value: "light" },
        { label: "filled", value: "filled" },
        { label: "outline", value: "outline" }
      ]
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "color", type: "color", initialValue: "gray", defaultValue: "gray" },
    {
      name: "src",
      type: "string",
      initialValue: avatars[1]
    }
  ]
};

export { configurator };
//# sourceMappingURL=Avatar.demo.configurator.js.map
