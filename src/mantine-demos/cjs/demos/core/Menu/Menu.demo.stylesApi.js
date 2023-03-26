'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Menu, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  item: {
    '&[data-hovered]': {
      backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Menu classNames={classes}>
      {/* Menu content... */}
    </Menu>
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  item: {
    "&[data-hovered]": {
      backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, {
    classNames: classes
  }, /* @__PURE__ */ React__default.createElement(_menuItems.DemoMenuItems, null)));
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Menu.demo.stylesApi.js.map
