import React from 'react';
import { rem, MantineProvider, Group, Button, Badge } from '@mantine/core';

const code = `
import { MantineProvider, Group, Button, Badge, ButtonStylesParams } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams, { variant }) => ({
              root: {
                height: '${rem(42)}',
                padding: '0 ${rem(30)}',
                backgroundColor:
                  variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },

          Badge: {
            // Use raw styles object if you do not need theme dependency
            styles: {
              root: { borderWidth: '${rem(2)}' },
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="outline">Outline button</Button>
        <Button variant="filled" color="cyan">Filled button</Button>
        <Badge variant="dot">Dot badge</Badge>
      </Group>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: {
      components: {
        Button: {
          styles: (theme, params, { variant }) => ({
            root: {
              height: rem(42),
              padding: `0 ${rem(30)}`,
              backgroundColor: variant === "filled" ? theme.colors[params.color || theme.primaryColor][9] : void 0
            }
          })
        },
        Badge: {
          styles: {
            root: { borderWidth: rem(2) }
          }
        }
      }
    }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Outline button"), /* @__PURE__ */ React.createElement(Button, {
    variant: "filled",
    color: "cyan"
  }, "Filled button"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "dot"
  }, "Dot badge")));
}
const providerStyles = {
  type: "demo",
  component: Demo,
  code
};

export { providerStyles };
//# sourceMappingURL=Theme.demo.providerStyles.js.map
