'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const theme = core.useMantineTheme();
  const [checked, setChecked] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Switch, {
    checked,
    onChange: (event) => setChecked(event.currentTarget.checked),
    color: "teal",
    size: "md",
    label: "Switch with thumb icon",
    thumbIcon: checked ? /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
      size: "0.8rem",
      color: theme.colors.teal[theme.fn.primaryShade()],
      stroke: 3
    }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconX, {
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

exports.thumbIcon = thumbIcon;
//# sourceMappingURL=Switch.demo.thumbIcon.js.map
