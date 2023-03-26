import React from 'react';
import { Tabs } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Tabs, {
    defaultValue: "first"
  }, /* @__PURE__ */ React.createElement(Tabs.List, __spreadValues({}, props), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "first"
  }, "First tab"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "second"
  }, "Second tab"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "third"
  }, "Third tab")));
}
const codeTemplate = (props) => `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List${props}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;
const positionConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "grow", type: "boolean", defaultValue: false },
    {
      name: "position",
      type: "select",
      initialValue: "left",
      defaultValue: "left",
      data: [
        { label: "left", value: "left" },
        { label: "right", value: "right" },
        { label: "center", value: "center" },
        { label: "apart", value: "apart" }
      ]
    }
  ]
};

export { positionConfigurator };
//# sourceMappingURL=Tabs.demo.positionConfigurator.js.map
