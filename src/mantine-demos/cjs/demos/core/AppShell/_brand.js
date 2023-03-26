'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var _logo = require('./_logo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Brand() {
  const { colorScheme, toggleColorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: (theme) => ({
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      paddingBottom: theme.spacing.lg,
      borderBottom: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
    })
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "apart"
  }, /* @__PURE__ */ React__default.createElement(_logo.Logo, {
    colorScheme
  }), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "default",
    onClick: () => toggleColorScheme(),
    size: 30
  }, colorScheme === "dark" ? /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, {
    size: "1rem"
  }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconMoonStars, {
    size: "1rem"
  }))));
}

exports.Brand = Brand;
//# sourceMappingURL=_brand.js.map
