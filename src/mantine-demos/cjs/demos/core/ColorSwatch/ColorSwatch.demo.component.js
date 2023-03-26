'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const theme = core.useMantineTheme();
  const [checked, setChecked] = React.useState(true);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    spacing: "xs"
  }, /* @__PURE__ */ React__default.createElement(core.ColorSwatch, {
    component: "button",
    color: theme.colors.grape[6],
    onClick: () => setChecked((c) => !c),
    sx: { color: "#fff", cursor: "pointer" }
  }, checked && /* @__PURE__ */ React__default.createElement(core.CheckIcon, {
    width: core.rem(10)
  })));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

exports.component = component;
//# sourceMappingURL=ColorSwatch.demo.component.js.map
