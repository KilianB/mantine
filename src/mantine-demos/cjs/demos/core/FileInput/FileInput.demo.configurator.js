'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

const codeTemplate = (props) => `
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput
     ${props}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: core.FileInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Pick file" },
    {
      name: "label",
      type: "string",
      initialValue: "Your resume"
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

exports.configurator = configurator;
//# sourceMappingURL=FileInput.demo.configurator.js.map
