import React from 'react';
import { createStyles, rem, em } from '@mantine/core';

const code = `
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: rem(100),
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [\`@media (max-width: \${theme.breakpoints.xl})\`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    [\`@media (max-width: \${em(800)})\`]: {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
`;
const useStyles = createStyles((theme) => ({
  container: {
    height: rem(100),
    backgroundColor: theme.colors.blue[6],
    [`@media (max-width: ${theme.breakpoints.xl})`]: {
      backgroundColor: theme.colors.pink[6]
    },
    [`@media (max-width: ${em(800)})`]: {
      backgroundColor: theme.colors.orange[6]
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  });
}
const createStylesMedia = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesMedia };
//# sourceMappingURL=CreateStyles.demo.media.js.map
