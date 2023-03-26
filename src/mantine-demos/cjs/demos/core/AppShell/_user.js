'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function User() {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: {
      paddingTop: theme.spacing.sm,
      borderTop: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
    }
  }, /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    sx: {
      display: "block",
      width: "100%",
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
    radius: "xl"
  }), /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: { flex: 1 }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    weight: 500
  }, "Amy Horsefighter"), /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "xs"
  }, "ahorsefighter@gmail.com")), theme.dir === "ltr" ? /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, {
    size: core.rem(18)
  }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronLeft, {
    size: core.rem(18)
  }))));
}

exports.User = User;
//# sourceMappingURL=_user.js.map
