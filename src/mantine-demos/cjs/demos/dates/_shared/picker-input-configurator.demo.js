'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getCodeTemplate = (component) => (props) => `import { ${component} } from '@mantine/dates';

function Demo() {
  return (
    <${component}
     ${props}
    />
  );
}
`;
function getPickerInputConfiguratorDemo(Component) {
  return {
    type: "configurator",
    component: Component,
    codeTemplate: getCodeTemplate(Component.displayName.replace("@mantine/dates/", "")),
    configuratorProps: { multiline: 3 },
    configurator: [
      { name: "placeholder", type: "string", initialValue: "Pick date" },
      {
        name: "label",
        type: "string",
        initialValue: "Pick date"
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
}

exports.getPickerInputConfiguratorDemo = getPickerInputConfiguratorDemo;
//# sourceMappingURL=picker-input-configurator.demo.js.map
