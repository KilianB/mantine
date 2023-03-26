'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var _mainLinks = require('./_mainLinks.js');
var _user = require('./_user.js');
var _logo = require('./_logo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const { colorScheme, toggleColorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.AppShell, {
    padding: "md",
    fixed: false,
    navbar: /* @__PURE__ */ React__default.createElement(core.Navbar, {
      width: { base: 300 },
      height: 500,
      p: "xs"
    }, /* @__PURE__ */ React__default.createElement(core.Navbar.Section, {
      grow: true,
      mt: "xs"
    }, /* @__PURE__ */ React__default.createElement(_mainLinks.MainLinks, null)), /* @__PURE__ */ React__default.createElement(core.Navbar.Section, null, /* @__PURE__ */ React__default.createElement(_user.User, null))),
    header: /* @__PURE__ */ React__default.createElement(core.Header, {
      height: 60
    }, /* @__PURE__ */ React__default.createElement(core.Group, {
      sx: { height: "100%" },
      px: 20,
      position: "apart"
    }, /* @__PURE__ */ React__default.createElement(_logo.Logo, {
      colorScheme
    }), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
      variant: "default",
      onClick: () => toggleColorScheme(),
      size: 30
    }, colorScheme === "dark" ? /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, {
      size: "1rem"
    }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconMoonStars, {
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

exports.usage = usage;
//# sourceMappingURL=AppShell.demo.usage.js.map
