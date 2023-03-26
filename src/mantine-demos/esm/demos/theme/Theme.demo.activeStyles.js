import React from 'react';
import { MantineProvider, Group, Button } from '@mantine/core';

const code = `
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Button>Press me</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: { activeStyles: { transform: "scale(0.95)" } }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, null, "Press me")));
}
const activeStyles = {
  type: "demo",
  component: Demo,
  code
};

export { activeStyles };
//# sourceMappingURL=Theme.demo.activeStyles.js.map
