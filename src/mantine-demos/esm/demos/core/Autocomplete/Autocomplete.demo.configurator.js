import React from 'react';
import { Autocomplete } from '@mantine/core';

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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     ${props}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React.createElement(Autocomplete, __spreadValues({
    data: ["React", "Angular", "Svelte", "Vue"]
  }, props)),
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Pick one" },
    {
      name: "label",
      type: "string",
      initialValue: "Your favorite framework/library"
    },
    {
      name: "description",
      type: "string",
      initialValue: ""
    },
    {
      name: "error",
      type: "string",
      initialValue: ""
    },
    {
      name: "variant",
      type: "select",
      data: [
        { label: "default", value: "default" },
        { label: "filled", value: "filled" },
        { label: "unstyled", value: "unstyled" }
      ],
      initialValue: "default",
      defaultValue: "default"
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    {
      name: "withAsterisk",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    }
  ]
};

export { configurator };
//# sourceMappingURL=Autocomplete.demo.configurator.js.map
