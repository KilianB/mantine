'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.CopyButton, {
    value: "https://mantine.dev",
    timeout: 2e3
  }, ({ copied, copy }) => /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: copied ? "Copied" : "Copy",
    withArrow: true,
    position: "right"
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    color: copied ? "teal" : "gray",
    onClick: copy
  }, copied ? /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
    size: "1rem"
  }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconCopy, {
    size: "1rem"
  })))));
}
const tooltip = {
  type: "demo",
  component: Demo,
  code
};

exports.tooltip = tooltip;
//# sourceMappingURL=CopyButton.demo.tooltip.js.map
