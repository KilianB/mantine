import React from 'react';
import { Checkbox, Group } from '@mantine/core';

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
const codeTemplate = (props) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
     ${props}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Checkbox.Group, __spreadValues({
    defaultValue: ["react"]
  }, props), /* @__PURE__ */ React.createElement(Group, {
    mt: "xs"
  }, /* @__PURE__ */ React.createElement(Checkbox, {
    value: "react",
    label: "React"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    value: "svelte",
    label: "Svelte"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    value: "ng",
    label: "Angular"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    value: "vue",
    label: "Vue"
  })));
}
const groupConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: "label", type: "string", initialValue: "Select your favorite frameworks/libraries" },
    { name: "description", type: "string", initialValue: "This is anonymous" },
    { name: "error", type: "string", initialValue: "" },
    { name: "withAsterisk", type: "boolean", initialValue: true, defaultValue: false }
  ]
};

export { groupConfigurator };
//# sourceMappingURL=Checkbox.demo.groupConfigurator.js.map
