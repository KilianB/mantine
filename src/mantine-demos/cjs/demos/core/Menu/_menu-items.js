'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DemoMenuItems({ widthRightSection = true, withTarget = true }) {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, withTarget && /* @__PURE__ */ React__default.createElement(core.Menu.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Toggle menu")), /* @__PURE__ */ React__default.createElement(core.Menu.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Menu.Label, null, "Application"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSettings, {
      size: core.rem(14)
    })
  }, "Settings"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconMessageCircle, {
      size: core.rem(14)
    })
  }, "Messages"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, {
      size: core.rem(14)
    })
  }, "Gallery"), widthRightSection && /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, {
      size: core.rem(14)
    }),
    rightSection: /* @__PURE__ */ React__default.createElement(core.Text, {
      size: "xs",
      color: "dimmed"
    }, "\u2318K")
  }, "Search"), /* @__PURE__ */ React__default.createElement(core.Menu.Divider, null), /* @__PURE__ */ React__default.createElement(core.Menu.Label, null, "Danger zone"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowsLeftRight, {
      size: core.rem(14)
    })
  }, "Transfer my data"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    color: "red",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconTrash, {
      size: core.rem(14)
    })
  }, "Delete my account")));
}

exports.DemoMenuItems = DemoMenuItems;
//# sourceMappingURL=_menu-items.js.map
