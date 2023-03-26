import React from 'react';
import { Group, Menu } from '@mantine/core';
import { DemoMenuItems } from './_menu-items.js';
import { FLOATING_ARROW_POSITION_DATA } from '../../../shared/floating-position-data.js';

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
  }, /* @__PURE__ */ React.createElement(Menu, __spreadValues({
    opened: true,
    trigger: "hover"
  }, props), /* @__PURE__ */ React.createElement(DemoMenuItems, null)));
}
const codeTemplate = (props) => `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu${props}>
      {/* Menu items */}
    </Menu>
  );
}
`;
const positionConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "position",
      type: "select",
      initialValue: "bottom",
      defaultValue: "bottom",
      data: [
        { label: "bottom", value: "bottom" },
        { label: "bottom-start", value: "bottom-start" },
        { label: "bottom-end", value: "bottom-end" },
        { label: "top", value: "top" },
        { label: "top-start", value: "top-start" },
        { label: "top-end", value: "top-end" },
        { label: "left", value: "left" },
        { label: "left-start", value: "left-start" },
        { label: "left-end", value: "left-end" },
        { label: "right", value: "right" },
        { label: "right-start", value: "right-start" },
        { label: "right-end", value: "right-end" }
      ]
    },
    {
      name: "offset",
      type: "number",
      initialValue: 5,
      defaultValue: 5,
      max: 20,
      min: -20
    },
    {
      name: "withArrow",
      type: "boolean",
      initialValue: false,
      defaultValue: false
    },
    {
      name: "arrowPosition",
      type: "select",
      data: FLOATING_ARROW_POSITION_DATA,
      initialValue: "side",
      defaultValue: "side"
    }
  ]
};

export { positionConfigurator };
//# sourceMappingURL=Menu.demo.positionConfigurator.js.map
