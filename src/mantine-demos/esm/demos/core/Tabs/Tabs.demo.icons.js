import React from 'react';
import { IconMessageCircle, IconSettings, IconCoin } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Tabs, {
    defaultValue: "chat"
  }, /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    icon: /* @__PURE__ */ React.createElement(IconMessageCircle, {
      size: "0.8rem"
    }),
    value: "chat"
  }, "Chat"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    icon: /* @__PURE__ */ React.createElement(IconSettings, {
      size: "0.8rem"
    }),
    value: "settings"
  }, "Settings"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    icon: /* @__PURE__ */ React.createElement(IconCoin, {
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

export { icons };
//# sourceMappingURL=Tabs.demo.icons.js.map
