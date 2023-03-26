import React from 'react';
import { IconAt } from '@tabler/icons-react';
import { rem, Input } from '@mantine/core';

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
const iconSizes = {
  xs: rem(14),
  sm: rem(16),
  md: rem(18),
  lg: rem(22),
  xl: rem(24)
};
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Input, __spreadValues({
    icon: /* @__PURE__ */ React.createElement(IconAt, {
      size: iconSizes[props.size],
      stroke: 1.5
    })
  }, props));
}
const codeTemplate = (props) => `
import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return (
    <Input
      icon={<IconAt />}
     ${props}
    />
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
      name: "variant",
      type: "segmented",
      data: [
        { label: "default", value: "default" },
        { label: "filled", value: "filled" },
        { label: "unstyled", value: "unstyled" }
      ],
      initialValue: "default",
      defaultValue: "default"
    },
    { name: "placeholder", type: "string", initialValue: "Your email" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "error", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Input.demo.configurator.js.map
