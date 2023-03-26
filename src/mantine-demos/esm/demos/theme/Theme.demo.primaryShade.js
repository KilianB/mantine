import React from 'react';
import { MantineProvider, Group, Button } from '@mantine/core';

function Wrapper({ primaryShade: primaryShade2 }) {
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: { primaryShade: primaryShade2 }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "filled"
  }, "Filled button"), /* @__PURE__ */ React.createElement(Button, {
    variant: "light"
  }, "Light button"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Outline button")));
}
const codeTemplate = (props) => `
import { MantineProvider, Group, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props.replace(" primaryShade={", "").replace("}", "")} }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </MantineProvider>
  );
}
`;
const primaryShade = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: "primaryShade", type: "number", initialValue: 6, min: 0, max: 9 }]
};

export { primaryShade };
//# sourceMappingURL=Theme.demo.primaryShade.js.map
