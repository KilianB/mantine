import React from 'react';
import { createStyles } from '@mantine/core';

const code = `
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors.blue[6],
    border: 0,
    borderRadius: theme.radius.md,
    padding: \`\${theme.spacing.sm} \${theme.spacing.lg}\`,
    cursor: 'pointer',
    margin: theme.spacing.md,

    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },

    '&:not(:first-of-type)': {
      backgroundColor: theme.colors.violet[6],

      // pseudo-classes can be nested
      '&:hover': {
        backgroundColor: theme.colors.violet[9],
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div>
      <button type="button" className={classes.button}>
        First
      </button>
      <button type="button" className={classes.button}>
        Second
      </button>
      <button type="button" className={classes.button}>
        Third
      </button>
    </div>
  );
}
`;
const useStyles = createStyles((theme) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors.blue[6],
    border: 0,
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    cursor: "pointer",
    margin: theme.spacing.md,
    "&:hover": {
      backgroundColor: theme.colors.blue[9]
    },
    "&:not(:first-of-type)": {
      backgroundColor: theme.colors.violet[6],
      "&:hover": {
        backgroundColor: theme.colors.violet[9]
      }
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: classes.button
  }, "First"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: classes.button
  }, "Second"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: classes.button
  }, "Third"));
}
const createStylesPseudo = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesPseudo };
//# sourceMappingURL=CreateStyles.demo.pseudo.js.map
