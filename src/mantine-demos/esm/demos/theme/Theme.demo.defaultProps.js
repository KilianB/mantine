import React from 'react';
import { MantineProvider, Group, Button, Switch } from '@mantine/core';

const ButtonDefaultProps = {
  size: "xs",
  color: "cyan"
};
const SwitchDefaultProps = {
  size: "xs",
  onLabel: "ON",
  offLabel: "OFF"
};
const code = `
import { MantineProvider, Group, Button, Switch } from '@mantine/core';

function Demo() {
  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Button: {
              defaultProps: {
                size: 'xs',
                color: 'cyan',
              },
            },

            Switch: {
              defaultProps: {
                size: 'xs',
                onLabel: 'ON',
                offLabel: 'OFF',
              },
            },
          },
        }}
      >
        <Group position="center">
          <Button>Within provider</Button>
          <Switch label="Within provider" />
        </Group>
      </MantineProvider>

      <Group position="center" mt="md">
        <Button>Outside of provider</Button>
        <Switch label="Outside of provider" />
      </Group>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: {
      components: {
        Button: { defaultProps: ButtonDefaultProps },
        Switch: { defaultProps: SwitchDefaultProps }
      }
    }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, null, "Within provider"), /* @__PURE__ */ React.createElement(Switch, {
    label: "Within provider"
  }))), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    mt: "md"
  }, /* @__PURE__ */ React.createElement(Button, null, "Outside of provider"), /* @__PURE__ */ React.createElement(Switch, {
    label: "Outside of provider"
  })));
}
const defaultProps = {
  type: "demo",
  component: Demo,
  code
};

export { defaultProps };
//# sourceMappingURL=Theme.demo.defaultProps.js.map
