import React from 'react';
import { createStyles } from '@mantine/core';
import { BaseDemo } from './_base.js';

const code = `
import { createStyles } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

// Add your own disabled styles
const useStyles = createStyles((theme) => ({
  disabled: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    cursor: 'not-allowed',

    '& *': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <Dropzone disabled className={classes.disabled}>
      {/* children, see previous demo */}
    </Dropzone>
  );
}
`;
const useStyles = createStyles((theme) => ({
  disabled: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
    cursor: "not-allowed",
    "& *": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement(BaseDemo, {
    disabled: true,
    className: classes.disabled
  });
}
const disabled = {
  type: "demo",
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=Dropzone.demo.disabled.js.map
