'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    border: \`\${rem(1)} solid transparent\`,
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Accordion
      maw={420}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
    >
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm
  },
  item: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    border: `${core.rem(1)} solid transparent`,
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",
    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1
    }
  },
  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)"
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement(core.Accordion, {
    maw: 420,
    mx: "auto",
    variant: "filled",
    defaultValue: "customization",
    classNames: classes,
    className: classes.root
  }, _base.baseDemoItems);
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Accordion.demo.stylesApi.js.map
