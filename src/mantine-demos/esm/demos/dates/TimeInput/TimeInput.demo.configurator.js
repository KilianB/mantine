import { TimeInput } from '@mantine/dates';

const codeTemplate = (props) => `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return (
    <TimeInput
     ${props}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: TimeInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: "label",
      type: "string",
      initialValue: "Current time"
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
//# sourceMappingURL=TimeInput.demo.configurator.js.map
