import { JsonInput } from '@mantine/core';

const codeTemplate = (props) => `
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
     ${props}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: JsonInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Your package.json" },
    {
      name: "label",
      type: "string",
      initialValue: "Your package.json"
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
//# sourceMappingURL=JsonInput.demo.configurator.js.map
