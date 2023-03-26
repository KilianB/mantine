'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const { colorScheme, toggleColorScheme } = core.useMantineColorScheme();
  const dark = colorScheme === "dark";
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "outline",
    color: dark ? "yellow" : "blue",
    onClick: () => toggleColorScheme(),
    title: "Toggle color scheme"
  }, dark ? /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, {
    size: "1.1rem"
  }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconMoonStars, {
    size: "1.1rem"
  })));
}
const darkThemeToggle = {
  type: "demo",
  component: Demo,
  code
};

exports.darkThemeToggle = darkThemeToggle;
//# sourceMappingURL=Theme.demo.darkThemeToggle.js.map
