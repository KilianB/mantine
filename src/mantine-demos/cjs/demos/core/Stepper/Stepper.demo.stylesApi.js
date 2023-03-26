'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Stepper, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  separator: {
    height: rem(2),
    borderTop: \`\${rem(2)} dashed \${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]}\`,
    borderRadius: theme.radius.xl,
    backgroundColor: 'transparent',
  },

  separatorActive: {
    borderWidth: 0,
    backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
  },

  stepIcon: {
    borderColor: 'transparent',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    borderWidth: 0,

    '&[data-completed]': {
      borderWidth: 0,
      backgroundColor: 'transparent',
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
    },
  },

  step: {
    transition: 'transform 150ms ease',

    '&[data-progress]': {
      transform: 'scale(1.05)',
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  const [active, setActive] = useState(1);
  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  root: {
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
  },
  separator: {
    height: core.rem(2),
    borderTop: `${core.rem(2)} dashed ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]}`,
    borderRadius: theme.radius.xl,
    backgroundColor: "transparent"
  },
  separatorActive: {
    borderWidth: 0,
    backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6])
  },
  stepIcon: {
    borderColor: "transparent",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.white,
    borderWidth: 0,
    "&[data-completed]": {
      borderWidth: 0,
      backgroundColor: "transparent",
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6])
    }
  },
  step: {
    transition: "transform 150ms ease",
    "&[data-progress]": {
      transform: "scale(1.05)"
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  const [active, setActive] = React.useState(1);
  return /* @__PURE__ */ React__default.createElement(core.Stepper, {
    classNames: classes,
    active,
    onStepClick: setActive,
    breakpoint: "sm"
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 2",
    description: "Verify email"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Stepper.demo.stylesApi.js.map
