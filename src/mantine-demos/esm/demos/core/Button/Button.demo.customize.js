import React from 'react';
import { IconBrandTwitter } from '@tabler/icons-react';
import { Group, Button, rem } from '@mantine/core';

const code = `
import { Group, Button, rem } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/mantinedev"
        leftIcon={<IconBrandTwitter size={rem(18)} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(20),
            '&:not([data-disabled])': theme.fn.hover({
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
      >
        Follow on Twitter
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    component: "a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/mantinedev",
    leftIcon: /* @__PURE__ */ React.createElement(IconBrandTwitter, {
      size: rem(18)
    }),
    styles: (theme) => ({
      root: {
        backgroundColor: "#00acee",
        border: 0,
        height: rem(42),
        paddingLeft: rem(20),
        paddingRight: rem(20),
        "&:not([data-disabled])": theme.fn.hover({
          backgroundColor: theme.fn.darken("#00acee", 0.05)
        })
      },
      leftIcon: {
        marginRight: theme.spacing.md
      }
    })
  }, "Follow on Twitter"));
}
const customize = {
  type: "demo",
  code,
  component: Demo
};

export { customize };
//# sourceMappingURL=Button.demo.customize.js.map
