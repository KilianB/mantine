import React from 'react';
import { Group, Button, MantineProvider } from '@mantine/core';

const code = `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient">Default gradient button</Button>
      <MantineProvider
        inherit
        theme={{
          defaultGradient: {
            from: 'orange',
            to: 'red',
            deg: 45,
          },
        }}
      >
        <Button variant="gradient">Gradient from provider</Button>
      </MantineProvider>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "gradient"
  }, "Default gradient button"), /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: {
      defaultGradient: {
        from: "orange",
        to: "red",
        deg: 45
      }
    }
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "gradient"
  }, "Gradient from provider")));
}
const defaultGradient = {
  type: "demo",
  component: Demo,
  code
};

export { defaultGradient };
//# sourceMappingURL=Theme.demo.defaultGradient.js.map
