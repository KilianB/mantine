'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

const codeTemplate = (props) => `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
     ${props}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: core.PasswordInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Password" },
    {
      name: "label",
      type: "string",
      initialValue: "Password"
    },
    {
      name: "description",
      type: "string",
      initialValue: "Password must include at least one letter, number and special character"
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

exports.configurator = configurator;
//# sourceMappingURL=PasswordInput.demo.configurator.js.map
