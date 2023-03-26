import React from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useMantineColorScheme, AppShell, Navbar, Header, Group, ActionIcon } from '@mantine/core';
import { MainLinks } from './_mainLinks.js';
import { User } from './_user.js';
import { Logo } from './_logo.js';

const code = `
import { AppShell, Navbar, Header } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
`;
function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement(AppShell, {
    padding: "md",
    fixed: false,
    navbar: /* @__PURE__ */ React.createElement(Navbar, {
      width: { base: 300 },
      height: 500,
      p: "xs"
    }, /* @__PURE__ */ React.createElement(Navbar.Section, {
      grow: true,
      mt: "xs"
    }, /* @__PURE__ */ React.createElement(MainLinks, null)), /* @__PURE__ */ React.createElement(Navbar.Section, null, /* @__PURE__ */ React.createElement(User, null))),
    header: /* @__PURE__ */ React.createElement(Header, {
      height: 60
    }, /* @__PURE__ */ React.createElement(Group, {
      sx: { height: "100%" },
      px: 20,
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
    })))),
    styles: (theme) => ({
      main: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      }
    })
  }, "Your application goes here");
}
const usage = {
  type: "demo",
  component: Demo,
  demoProps: { spacing: false },
  code
};

export { usage };
//# sourceMappingURL=AppShell.demo.usage.js.map
