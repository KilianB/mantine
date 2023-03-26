import React, { useState } from 'react';
import { useMantineTheme, Group, ColorSwatch, CheckIcon, rem } from '@mantine/core';

const code = `
import { useState } from 'react';
import { ColorSwatch, Group, useMantineTheme, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        sx={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon width={rem(10)} />}
      </ColorSwatch>
    </Group>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    spacing: "xs"
  }, /* @__PURE__ */ React.createElement(ColorSwatch, {
    component: "button",
    color: theme.colors.grape[6],
    onClick: () => setChecked((c) => !c),
    sx: { color: "#fff", cursor: "pointer" }
  }, checked && /* @__PURE__ */ React.createElement(CheckIcon, {
    width: rem(10)
  })));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=ColorSwatch.demo.component.js.map
