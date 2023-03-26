import React from 'react';
import { createStyles, getStylesRef } from '@mantine/core';

const code = `
import { createStyles, getStylesRef } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    // assign reference to selector
    ref: getStylesRef('button'),

    // and add any other properties
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: \`\${theme.spacing.sm} \${theme.spacing.lg}\`,
    borderRadius: theme.radius.md,
    cursor: 'pointer',
    border: 0,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    padding: theme.spacing.xl,

    // reference button with nested selector
    [\`&:hover .\${getStylesRef('button')}\`]: {
      backgroundColor: theme.colors.violet[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.button} type="button">
        Hover container to change button color
      </button>
    </div>
  );
}
`;
const useStyles = createStyles((theme) => ({
  button: {
    ref: getStylesRef("button"),
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.radius.md,
    cursor: "pointer",
    border: 0
  },
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
    padding: theme.spacing.xl,
    [`&:hover .${getStylesRef("button")}`]: {
      backgroundColor: theme.colors.violet[6]
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  }, /* @__PURE__ */ React.createElement("button", {
    className: classes.button,
    type: "button"
  }, "Hover container to change button color"));
}
const createStylesComposition = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesComposition };
//# sourceMappingURL=CreateStyles.demo.composition.js.map
