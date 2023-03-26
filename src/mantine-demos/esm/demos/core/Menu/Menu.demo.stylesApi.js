import React from 'react';
import { createStyles, Group, Menu } from '@mantine/core';
import { DemoMenuItems } from './_menu-items.js';

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
const useStyles = createStyles((theme) => ({
  item: {
    "&[data-hovered]": {
      backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, {
    classNames: classes
  }, /* @__PURE__ */ React.createElement(DemoMenuItems, null)));
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

export { stylesApi };
//# sourceMappingURL=Menu.demo.stylesApi.js.map
