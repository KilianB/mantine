import React from 'react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function Wrapper(props) {
  const panelProps = props.orientation === "vertical" ? { pl: "xs" } : { pt: "xs" };
  return /* @__PURE__ */ React.createElement(Tabs, __spreadValues({
    defaultValue: "gallery"
  }, props), /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "gallery",
    icon: /* @__PURE__ */ React.createElement(IconPhoto, {
      size: "0.8rem"
    })
  }, "Gallery"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "messages",
    icon: /* @__PURE__ */ React.createElement(IconMessageCircle, {
      size: "0.8rem"
    })
  }, "Messages"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "settings",
    icon: /* @__PURE__ */ React.createElement(IconSettings, {
      size: "0.8rem"
    })
  }, "Settings")), /* @__PURE__ */ React.createElement(Tabs.Panel, __spreadValues({
    value: "gallery"
  }, panelProps), "Gallery tab content"), /* @__PURE__ */ React.createElement(Tabs.Panel, __spreadValues({
    value: "messages"
  }, panelProps), "Messages tab content"), /* @__PURE__ */ React.createElement(Tabs.Panel, __spreadValues({
    value: "settings"
  }, panelProps), "Settings tab content"));
}
const codeTemplate = (props) => {
  const panelProps = props.includes("vertical") ? 'pl="xs"' : 'pt="xs"';
  return `
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <Tabs${props} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>Gallery</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" ${panelProps}>
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" ${panelProps}>
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" ${panelProps}>
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
  `;
};
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    {
      name: "variant",
      type: "segmented",
      initialValue: "default",
      defaultValue: "default",
      data: [
        { value: "default", label: "Default" },
        { value: "outline", label: "Outline" },
        { value: "pills", label: "Pills" }
      ]
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    {
      name: "orientation",
      type: "segmented",
      initialValue: "horizontal",
      defaultValue: "horizontal",
      data: [
        { value: "horizontal", label: "Horizontal" },
        { value: "vertical", label: "Vertical" }
      ]
    }
  ]
};

export { configurator };
//# sourceMappingURL=Tabs.demo.configurator.js.map
