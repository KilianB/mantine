import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tabs, {
    defaultValue: "chat",
    unstyled: true
  }, /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "chat"
  }, "Chat"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "gallery"
  }, "Gallery"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "account"
  }, "Account")), /* @__PURE__ */ React.createElement(Tabs.Panel, {
    value: "chat"
  }, "Chat panel"), /* @__PURE__ */ React.createElement(Tabs.Panel, {
    value: "gallery"
  }, "Gallery panel"), /* @__PURE__ */ React.createElement(Tabs.Panel, {
    value: "account"
  }, "Account panel"));
}
const unstyled = {
  type: "demo",
  component: Demo,
  code
};

export { unstyled };
//# sourceMappingURL=Tabs.demo.unstyled.js.map
