import React from 'react';
import { rem, keyframes, createStyles } from '@mantine/core';

const code = `
import { createStyles, keyframes } from '@mantine/core';

// Export animation to reuse it in other components
export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, ${rem(-30)}, 0)' },
  '70%': { transform: 'translate3d(0, ${rem(-15)}, 0)' },
  '90%': { transform: 'translate3d(0, ${rem(-4)}, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: \`\${bounce} 3s ease-in-out infinite\`,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}
`;
const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: `translate3d(0, ${rem(-30)}, 0)` },
  "70%": { transform: `translate3d(0, ${rem(-15)}, 0)` },
  "90%": { transform: `translate3d(0, ${rem(-4)}, 0)` }
});
const useStyles = createStyles((theme) => ({
  container: {
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    padding: theme.spacing.xl,
    animation: `${bounce} 3s ease-in-out infinite`
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  }, "Keyframes demo");
}
const createStylesKeyframes = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesKeyframes };
//# sourceMappingURL=CreateStyles.demo.keyframes.js.map
