import React from 'react';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash } from '@tabler/icons-react';
import { Menu, Button, rem, Text } from '@mantine/core';

function DemoMenuItems({ widthRightSection = true, withTarget = true }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, withTarget && /* @__PURE__ */ React.createElement(Menu.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Toggle menu")), /* @__PURE__ */ React.createElement(Menu.Dropdown, null, /* @__PURE__ */ React.createElement(Menu.Label, null, "Application"), /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconSettings, {
      size: rem(14)
    })
  }, "Settings"), /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconMessageCircle, {
      size: rem(14)
    })
  }, "Messages"), /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconPhoto, {
      size: rem(14)
    })
  }, "Gallery"), widthRightSection && /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconSearch, {
      size: rem(14)
    }),
    rightSection: /* @__PURE__ */ React.createElement(Text, {
      size: "xs",
      color: "dimmed"
    }, "\u2318K")
  }, "Search"), /* @__PURE__ */ React.createElement(Menu.Divider, null), /* @__PURE__ */ React.createElement(Menu.Label, null, "Danger zone"), /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconArrowsLeftRight, {
      size: rem(14)
    })
  }, "Transfer my data"), /* @__PURE__ */ React.createElement(Menu.Item, {
    color: "red",
    icon: /* @__PURE__ */ React.createElement(IconTrash, {
      size: rem(14)
    })
  }, "Delete my account")));
}

export { DemoMenuItems };
//# sourceMappingURL=_menu-items.js.map
