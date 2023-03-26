import React from 'react';
import { useMantineColorScheme, Box, rem, Group, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { Logo } from './_logo.js';

function Brand() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement(Box, {
    sx: (theme) => ({
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      paddingBottom: theme.spacing.lg,
      borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
    })
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "apart"
  }, /* @__PURE__ */ React.createElement(Logo, {
    colorScheme
  }), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "default",
    onClick: () => toggleColorScheme(),
    size: 30
  }, colorScheme === "dark" ? /* @__PURE__ */ React.createElement(IconSun, {
    size: "1rem"
  }) : /* @__PURE__ */ React.createElement(IconMoonStars, {
    size: "1rem"
  }))));
}

export { Brand };
//# sourceMappingURL=_brand.js.map
