'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Group, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip for disabled button">
        <Button
          data-disabled
          sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
          onClick={(event) => event.preventDefault()}
        >
          Disabled button
        </Button>
      </Tooltip>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Tooltip for disabled button"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    "data-disabled": true,
    sx: { "&[data-disabled]": { pointerEvents: "all" } },
    onClick: (event) => event.preventDefault()
  }, "Disabled button")));
}
const disabledTooltip = {
  type: "demo",
  component: Demo,
  code
};

exports.disabledTooltip = disabledTooltip;
//# sourceMappingURL=Button.demo.disabledTooltip.js.map
