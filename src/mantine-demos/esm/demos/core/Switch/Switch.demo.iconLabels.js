import React from 'react';
import { useMantineTheme, Group, Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const code = `
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars size="1rem" stroke={2.5} color={theme.colors.blue[6]} />}
      />
    </Group>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Switch, {
    size: "md",
    color: theme.colorScheme === "dark" ? "gray" : "dark",
    onLabel: /* @__PURE__ */ React.createElement(IconSun, {
      size: "1rem",
      stroke: 2.5,
      color: theme.colors.yellow[4]
    }),
    offLabel: /* @__PURE__ */ React.createElement(IconMoonStars, {
      size: "1rem",
      stroke: 2.5,
      color: theme.colors.blue[6]
    })
  }));
}
const iconLabels = {
  type: "demo",
  component: Demo,
  code
};

export { iconLabels };
//# sourceMappingURL=Switch.demo.iconLabels.js.map
