import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Group, rem, Text, Anchor } from '@mantine/core';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';
import { Group, Text, Anchor, rem } from '@mantine/core';

function ActionsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Group
        position="apart"
        px={15}
        py="xs"
        sx={(theme) => ({
          borderTop: \`\${rem(1)} solid \${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }\`,
        })}
      >
        <Text size="xs" color="dimmed">
          Search powered by Mantine
        </Text>
        <Anchor size="xs" href="#">
          Learn more
        </Anchor>
      </Group>
    </div>
  );
}

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + T"
      nothingFoundMessage="Nothing found..."
      actionsWrapperComponent={ActionsWrapper}
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;
function ActionsWrapper({ children }) {
  return /* @__PURE__ */ React.createElement("div", null, children, /* @__PURE__ */ React.createElement(Group, {
    position: "apart",
    px: 15,
    py: "xs",
    sx: (theme) => ({
      borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
    })
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "xs",
    color: "dimmed"
  }, "Search powered by Mantine"), /* @__PURE__ */ React.createElement(Anchor, {
    size: "xs",
    href: "#"
  }, "Learn more")));
}
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    actionsWrapperComponent: ActionsWrapper,
    searchIcon: /* @__PURE__ */ React.createElement(IconSearch, {
      size: "1.2rem"
    }),
    searchPlaceholder: "Search...",
    shortcut: "mod + alt + T",
    buttonLabel: "Open spotlight",
    nothingFoundMessage: "Nothing found..."
  });
}
const actionsWrapperComponent = {
  type: "demo",
  component: Demo,
  code
};

export { actionsWrapperComponent };
//# sourceMappingURL=Spotlight.demo.actionsWrapperComponent.js.map
