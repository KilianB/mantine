import React from 'react';
import { rem, MantineProvider, Group, Button } from '@mantine/core';

const code = `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            sizes: {
              xxxs: () => ({
                root: {
                  height: '${rem(20)}',
                  padding: '${rem(5)}',
                  fontSize: '${rem(8)}',
                },
              }),

              xxl: (theme) => ({
                root: {
                  fontSize: '${rem(28)}',
                  height: '${rem(80)}',
                  padding: theme.spacing.xl,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button size="xxxs">XXXS button</Button>
        <Button size="xxl">XXL button</Button>
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
          sizes: {
            xxxs: () => ({
              root: {
                height: rem(20),
                padding: rem(5),
                fontSize: rem(8)
              }
            }),
            xxl: (theme) => ({
              root: {
                fontSize: rem(28),
                height: rem(80),
                padding: theme.spacing.xl
              }
            })
          }
        }
      }
    }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    size: "xxxs"
  }, "XXXS button"), /* @__PURE__ */ React.createElement(Button, {
    size: "xxl"
  }, "XXL button")));
}
const sizes = {
  type: "demo",
  component: Demo,
  code
};

export { sizes };
//# sourceMappingURL=Theme.demo.sizes.js.map
