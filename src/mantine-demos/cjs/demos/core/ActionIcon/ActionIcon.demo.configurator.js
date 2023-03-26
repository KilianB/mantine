'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  xs: core.rem(12),
  sm: core.rem(14),
  md: core.rem(18),
  lg: core.rem(26),
  xl: core.rem(34)
};
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, __spreadValues({}, props), /* @__PURE__ */ React__default.createElement(iconsReact.IconAdjustments, {
    size: iconSizes[props.size]
  })));
}
function computeChildIconSizeProp(props) {
  if (props.includes('size="xs"')) {
    return `size="${core.rem(12)}"`;
  }
  if (props.includes('size="sm"')) {
    return `size="${core.rem(14)}"`;
  }
  if (props.includes('size="md"')) {
    return `size="${core.rem(18)}"`;
  }
  if (props.includes('size="lg"')) {
    return `size="${core.rem(26)}"`;
  }
  if (props.includes('size="xl"')) {
    return `size="${core.rem(34)}"`;
  }
  return `size="${core.rem(18)}"`;
}
const codeTemplate = (props) => {
  const childIconSizeProp = computeChildIconSizeProp(props);
  return `
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon${props}>
      <IconAdjustments ${childIconSizeProp} />
    </ActionIcon>
  );
}
`;
};
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "gray", defaultValue: "gray" },
    { name: "size", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    {
      name: "variant",
      type: "select",
      data: [
        { label: "transparent", value: "transparent" },
        { label: "subtle", value: "subtle" },
        { label: "filled", value: "filled" },
        { label: "light", value: "light" },
        { label: "outline", value: "outline" },
        { label: "default", value: "default" }
      ],
      initialValue: "subtle",
      defaultValue: "subtle"
    },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "loading", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=ActionIcon.demo.configurator.js.map
