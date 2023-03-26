import React from 'react';
import { Tabs, Badge } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Tabs, {
    defaultValue: "chat"
  }, /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    rightSection: /* @__PURE__ */ React.createElement(Badge, {
      w: 16,
      h: 16,
      sx: { pointerEvents: "none" },
      variant: "filled",
      size: "xs",
      p: 0
    }, "6"),
    value: "chat"
  }, "Chat"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "settings"
  }, "Settings"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "money"
  }, "Gallery")));
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=Tabs.demo.rightSection.js.map
