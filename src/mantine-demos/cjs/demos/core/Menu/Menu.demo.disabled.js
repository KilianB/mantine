'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Menu, Button, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconSearch size={rem(14)} />} disabled>
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, null, /* @__PURE__ */ React__default.createElement(core.Menu.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Toggle menu")), /* @__PURE__ */ React__default.createElement(core.Menu.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Menu.Label, null, "Application"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
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
  }, "Gallery"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, {
      size: core.rem(14)
    }),
    disabled: true
  }, "Search"), /* @__PURE__ */ React__default.createElement(core.Menu.Divider, null), /* @__PURE__ */ React__default.createElement(core.Menu.Label, null, "Danger zone"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowsLeftRight, {
      size: core.rem(14)
    })
  }, "Transfer my data"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    color: "red",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconTrash, {
      size: core.rem(14)
    })
  }, "Delete my account"))));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=Menu.demo.disabled.js.map
