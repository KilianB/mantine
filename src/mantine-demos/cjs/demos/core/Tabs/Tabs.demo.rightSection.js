'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tabs, Badge } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab
          rightSection={
            <Badge
              w={16}
              h={16}
              sx={{ pointerEvents: 'none' }}
              variant="filled"
              size="xs"
              p={0}
            >
              6
            </Badge>
          }
          value="chat"
        >
          Chat
        </Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="money">Gallery</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, {
    defaultValue: "chat"
  }, /* @__PURE__ */ React__default.createElement(core.Tabs.List, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    rightSection: /* @__PURE__ */ React__default.createElement(core.Badge, {
      w: 16,
      h: 16,
      sx: { pointerEvents: "none" },
      variant: "filled",
      size: "xs",
      p: 0
    }, "6"),
    value: "chat"
  }, "Chat"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    value: "settings"
  }, "Settings"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    value: "money"
  }, "Gallery")));
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

exports.rightSection = rightSection;
//# sourceMappingURL=Tabs.demo.rightSection.js.map
