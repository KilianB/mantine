'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tabs } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconCoin } from '@tabler/icons-react';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<IconMessageCircle size="0.8rem" />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<IconSettings size="0.8rem" />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<IconCoin size="0.8rem" />} value="money" aria-label="Get money" />
      </Tabs.List>
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, {
    defaultValue: "chat"
  }, /* @__PURE__ */ React__default.createElement(core.Tabs.List, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconMessageCircle, {
      size: "0.8rem"
    }),
    value: "chat"
  }, "Chat"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSettings, {
      size: "0.8rem"
    }),
    value: "settings"
  }, "Settings"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCoin, {
      size: "0.8rem"
    }),
    value: "money",
    "aria-label": "Get money"
  })));
}
const icons = {
  type: "demo",
  code,
  component: Demo
};

exports.icons = icons;
//# sourceMappingURL=Tabs.demo.icons.js.map
