import React from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { Box, Alert } from '@mantine/core';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Alert, __spreadProps(__spreadValues({}, props), {
    icon: /* @__PURE__ */ React.createElement(IconAlertCircle, {
      size: "1rem"
    })
  })));
}
const codeTemplate = (props, children) => `
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <Alert icon={<IconAlertCircle size="1rem" />}${props}>
      ${children}
    </Alert>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "title", type: "string", initialValue: "Bummer!" },
    {
      name: "children",
      type: "string",
      initialValue: "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!"
    },
    { name: "color", type: "color", initialValue: "red", defaultValue: "blue" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "withCloseButton", type: "boolean", initialValue: false, defaultValue: false },
    {
      name: "variant",
      type: "segmented",
      data: [
        { label: "light", value: "light" },
        { label: "filled", value: "filled" },
        { label: "outline", value: "outline" }
      ],
      initialValue: "light",
      defaultValue: "light"
    }
  ]
};

export { configurator };
//# sourceMappingURL=Alert.demo.configurator.js.map
