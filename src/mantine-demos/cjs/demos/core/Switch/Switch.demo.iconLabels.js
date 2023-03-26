'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Switch, {
    size: "md",
    color: theme.colorScheme === "dark" ? "gray" : "dark",
    onLabel: /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, {
      size: "1rem",
      stroke: 2.5,
      color: theme.colors.yellow[4]
    }),
    offLabel: /* @__PURE__ */ React__default.createElement(iconsReact.IconMoonStars, {
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

exports.iconLabels = iconLabels;
//# sourceMappingURL=Switch.demo.iconLabels.js.map
