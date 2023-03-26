'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Group } from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

function SpotlightControl() {
  return (
    <Group position="center">
      <Button onClick={spotlight.open}>Open spotlight</Button>
    </Group>
  );
}

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size="1.2rem" />,
  },
];

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    searchIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, {
      size: "1.2rem"
    }),
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + 1",
    nothingFoundMessage: "Nothing found..."
  });
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=Spotlight.demo.usage.js.map
