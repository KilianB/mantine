import React from 'react';
import { Stack, Button } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Stack, __spreadValues({
    h: 300,
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
    })
  }, props), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "1"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "2"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "3"));
}
const codeTemplate = (props) => `
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack${props} h={300} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Stack>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "align",
      type: "select",
      data: [
        { label: "stretch", value: "stretch" },
        { label: "center", value: "center" },
        { label: "flex-start", value: "flex-start" },
        { label: "flex-end", value: "flex-end" }
      ],
      initialValue: "stretch",
      defaultValue: "stretch"
    },
    {
      name: "justify",
      type: "select",
      data: [
        { label: "center", value: "center" },
        { label: "flex-start", value: "flex-start" },
        { label: "flex-end", value: "flex-end" },
        { label: "space-between", value: "space-between" },
        { label: "space-around", value: "space-around" }
      ],
      initialValue: "center",
      defaultValue: "center"
    },
    { name: "spacing", type: "size", initialValue: "md", defaultValue: "md" }
  ]
};

export { configurator };
//# sourceMappingURL=Stack.demo.configurator.js.map
