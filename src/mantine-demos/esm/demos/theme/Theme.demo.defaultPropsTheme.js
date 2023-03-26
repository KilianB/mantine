import React from 'react';
import { MantineProvider, Button } from '@mantine/core';

const code = `
import { MantineProvider, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: {
      components: {
        Button: {
          defaultProps: (theme) => ({
            color: theme.colorScheme === "dark" ? "orange" : "cyan"
          })
        }
      }
    }
  }, /* @__PURE__ */ React.createElement(Button, null, "Demo button"));
}
const defaultPropsTheme = {
  type: "demo",
  component: Demo,
  code
};

export { defaultPropsTheme };
//# sourceMappingURL=Theme.demo.defaultPropsTheme.js.map
