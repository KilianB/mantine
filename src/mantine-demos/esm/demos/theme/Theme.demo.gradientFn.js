import React from 'react';
import { rem, MantineProvider, Group, Center } from '@mantine/core';

const code = `
import { MantineProvider, Center, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider inherit theme={{ defaultGradient: { from: 'blue', to: 'teal', deg: 20 } }}>
      <Group position="center" grow>
        <Center
          sx={(theme) => ({
            height: '${rem(40)}',
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })}
        >
          Default gradient
        </Center>

        <Center
          sx={(theme) => ({
            height: '${rem(40)}',
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'orange', deg: 45 }),
            color: theme.white,
          })}
        >
          Custom gradient
        </Center>
      </Group>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: { defaultGradient: { from: "blue", to: "teal", deg: 20 } }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    grow: true
  }, /* @__PURE__ */ React.createElement(Center, {
    sx: (theme) => ({
      height: rem(40),
      backgroundImage: theme.fn.gradient(),
      color: theme.white
    })
  }, "Default gradient"), /* @__PURE__ */ React.createElement(Center, {
    sx: (theme) => ({
      height: rem(40),
      backgroundImage: theme.fn.gradient({ from: "red", to: "orange", deg: 45 }),
      color: theme.white
    })
  }, "Custom gradient")));
}
const gradientFn = {
  type: "demo",
  component: Demo,
  code
};

export { gradientFn };
//# sourceMappingURL=Theme.demo.gradientFn.js.map
