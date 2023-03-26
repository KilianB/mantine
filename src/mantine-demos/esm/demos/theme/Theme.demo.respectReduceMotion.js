import React from 'react';
import { Group, Tooltip, Button, MantineProvider } from '@mantine/core';

const code = `
import { Tooltip, Button, MantineProvider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="User settings are respected" transitionProps={{ transition: 'pop', duration: 300 }}>
        <Button>Respect user settings</Button>
      </Tooltip>
      <MantineProvider inherit theme={{ respectReducedMotion: false }}>
        <Tooltip label="User settings are disregarded" transitionProps={{ transition: 'pop', duration: 300 }}>
          <Button>Disregard user settings</Button>
        </Tooltip>
      </MantineProvider>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "User settings are respected",
    transitionProps: { transition: "pop", duration: 300 }
  }, /* @__PURE__ */ React.createElement(Button, null, "Respect user settings")), /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: { respectReducedMotion: false }
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "User settings are disregarded",
    transitionProps: { transition: "pop", duration: 300 }
  }, /* @__PURE__ */ React.createElement(Button, null, "Disregard user settings"))));
}
const respectReduceMotion = {
  type: "demo",
  component: Demo,
  code
};

export { respectReduceMotion };
//# sourceMappingURL=Theme.demo.respectReduceMotion.js.map
