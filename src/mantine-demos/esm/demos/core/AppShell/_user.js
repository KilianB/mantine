import React from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import { useMantineTheme, Box, rem, UnstyledButton, Group, Avatar, Text } from '@mantine/core';

function User() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Box, {
    sx: {
      paddingTop: theme.spacing.sm,
      borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
    }
  }, /* @__PURE__ */ React.createElement(UnstyledButton, {
    sx: {
      display: "block",
      width: "100%",
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
      }
    }
  }, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Avatar, {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
    radius: "xl"
  }), /* @__PURE__ */ React.createElement(Box, {
    sx: { flex: 1 }
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    weight: 500
  }, "Amy Horsefighter"), /* @__PURE__ */ React.createElement(Text, {
    color: "dimmed",
    size: "xs"
  }, "ahorsefighter@gmail.com")), theme.dir === "ltr" ? /* @__PURE__ */ React.createElement(IconChevronRight, {
    size: rem(18)
  }) : /* @__PURE__ */ React.createElement(IconChevronLeft, {
    size: rem(18)
  }))));
}

export { User };
//# sourceMappingURL=_user.js.map
