import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
<Button
  sx={(theme) => ({
    borderColor: theme.colors.blue[9],

    '&:not([data-disabled]):hover': {
      backgroundColor: theme.colors.blue[9],
    },
  })}
>
  Button with sx styles
</Button>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    sx: (theme) => ({
      borderColor: theme.colors.blue[9],
      "&:not([data-disabled]):hover": {
        backgroundColor: theme.colors.blue[9]
      }
    })
  }, "Button with sx styles"));
}
const createStylesSx = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesSx };
//# sourceMappingURL=CreateStyles.demo.sx.js.map
