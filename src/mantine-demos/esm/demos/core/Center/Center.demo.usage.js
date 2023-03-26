import React from 'react';
import { Center, Box } from '@mantine/core';

const code = `
import { Center } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} mx="auto">
      <div>All elements inside Center are centered</div>
    </Center>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Center, {
    maw: 400,
    h: 100,
    mx: "auto",
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.blue[0]
    })
  }, /* @__PURE__ */ React.createElement(Box, {
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[1]
    })
  }, "All elements inside Center are centered"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Center.demo.usage.js.map
