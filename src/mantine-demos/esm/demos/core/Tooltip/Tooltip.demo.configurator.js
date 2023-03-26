import React from 'react';
import { Box, Group, Tooltip, Button } from '@mantine/core';
import { FLOATING_POSITION_DATA, FLOATING_ARROW_POSITION_DATA } from '../../../shared/floating-position-data.js';

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
const Wrapper = (props) => /* @__PURE__ */ React.createElement(Box, {
  p: "xl"
}, /* @__PURE__ */ React.createElement(Group, {
  position: "center"
}, /* @__PURE__ */ React.createElement(Tooltip, __spreadValues({
  label: "Tooltip"
}, props), /* @__PURE__ */ React.createElement(Button, {
  variant: "outline",
  size: "xl"
}, "With tooltip"))));
const codeTemplate = (props) => `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip"
     ${props}
    >
      <Button variant="outline" size="xl">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: "color",
      type: "color",
      initialValue: "blue"
    },
    {
      name: "position",
      type: "select",
      data: FLOATING_POSITION_DATA,
      initialValue: "top",
      defaultValue: "top"
    },
    { name: "withArrow", type: "boolean", initialValue: true, defaultValue: false },
    {
      name: "arrowPosition",
      type: "select",
      data: FLOATING_ARROW_POSITION_DATA,
      initialValue: "side",
      defaultValue: "side"
    }
  ]
};

export { configurator };
//# sourceMappingURL=Tooltip.demo.configurator.js.map
