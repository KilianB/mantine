import React from 'react';
import { createStyles, rem, getStylesRef } from '@mantine/core';

const code = `
import { createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    maxWidth: rem(400),
    width: '100%',
    height: rem(180),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [\`@media (max-width: \${theme.breakpoints.sm})\`]: {
      // Child reference in nested selectors via ref
      [\`& .\${getStylesRef('child')}\`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // assign ref to element
    ref: getStylesRef('child'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
`;
const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
    maxWidth: rem(400),
    width: "100%",
    height: rem(180),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: theme.radius.sm,
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      [`& .${getStylesRef("child")}`]: {
        fontSize: theme.fontSizes.xs
      }
    }
  },
  child: {
    ref: getStylesRef("child"),
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.child
  }, "createStyles demo"));
}
const createStylesBasics = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesBasics };
//# sourceMappingURL=CreateStyles.demo.basics.js.map
