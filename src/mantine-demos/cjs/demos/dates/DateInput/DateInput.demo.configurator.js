'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dates = require('@mantine/dates');

const codeTemplate = (props) => `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
     ${props}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: dates.DateInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Current date" },
    {
      name: "label",
      type: "string",
      initialValue: "Current date"
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
//# sourceMappingURL=DateInput.demo.configurator.js.map
