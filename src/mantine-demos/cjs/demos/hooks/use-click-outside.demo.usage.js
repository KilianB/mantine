'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const ref = hooks.useClickOutside(() => setOpened(false));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(true)
  }, "Open dropdown")), opened && /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref,
    shadow: "sm",
    sx: {
      width: core.rem(300),
      height: core.rem(60),
      position: "absolute",
      top: 0,
      left: `calc(50% - ${core.rem(150)})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
    }
  }, /* @__PURE__ */ React__default.createElement("span", null, "Click outside to close"))));
}
const useClickOutsideUsage = {
  type: "demo",
  component: Demo,
  code
};

exports.useClickOutsideUsage = useClickOutsideUsage;
//# sourceMappingURL=use-click-outside.demo.usage.js.map
