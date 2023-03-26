import React from 'react';
import { useMantineColorScheme, Group, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const code = `
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
}
`;
function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "outline",
    color: dark ? "yellow" : "blue",
    onClick: () => toggleColorScheme(),
    title: "Toggle color scheme"
  }, dark ? /* @__PURE__ */ React.createElement(IconSun, {
    size: "1.1rem"
  }) : /* @__PURE__ */ React.createElement(IconMoonStars, {
    size: "1.1rem"
  })));
}
const darkThemeToggle = {
  type: "demo",
  component: Demo,
  code
};

export { darkThemeToggle };
//# sourceMappingURL=Theme.demo.darkThemeToggle.js.map
