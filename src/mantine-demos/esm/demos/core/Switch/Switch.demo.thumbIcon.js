import React, { useState } from 'react';
import { useMantineTheme, Group, Switch } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

const code = `
import { useState } from 'react';
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Group position="center">
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        color="teal"
        size="md"
        label="Switch with thumb icon"
        thumbIcon={
          checked ? (
            <IconCheck size="0.8rem" color={theme.colors.teal[theme.fn.primaryShade()]} stroke={3} />
          ) : (
            <IconX size="0.8rem" color={theme.colors.red[theme.fn.primaryShade()]} stroke={3} />
          )
        }
      />
    </Group>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Switch, {
    checked,
    onChange: (event) => setChecked(event.currentTarget.checked),
    color: "teal",
    size: "md",
    label: "Switch with thumb icon",
    thumbIcon: checked ? /* @__PURE__ */ React.createElement(IconCheck, {
      size: "0.8rem",
      color: theme.colors.teal[theme.fn.primaryShade()],
      stroke: 3
    }) : /* @__PURE__ */ React.createElement(IconX, {
      size: "0.8rem",
      color: theme.colors.red[theme.fn.primaryShade()],
      stroke: 3
    })
  }));
}
const thumbIcon = {
  type: "demo",
  component: Demo,
  code
};

export { thumbIcon };
//# sourceMappingURL=Switch.demo.thumbIcon.js.map
