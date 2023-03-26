import React from 'react';
import { Input } from '@mantine/core';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Input, {
    placeholder: "Input with custom focus styles",
    styles: (theme) => ({
      input: {
        "&:focus-within": {
          borderColor: theme.colors.orange[7]
        }
      }
    })
  });
}
const focus = {
  type: "demo",
  component: Demo,
  code
};

export { focus };
//# sourceMappingURL=Input.demo.focus.js.map
