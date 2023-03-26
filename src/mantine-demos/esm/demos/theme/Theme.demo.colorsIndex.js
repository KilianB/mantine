import React from 'react';
import { Stack, Text, Button } from '@mantine/core';

const code = `
import { Button, Text, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack align="flex-start">
      <Text color="blue.3">Text with theme.colors.blue[3] color</Text>
      <Button color="pink.4">Button with theme.colors.pink[4] color</Button>
    </Stack>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stack, {
    align: "flex-start"
  }, /* @__PURE__ */ React.createElement(Text, {
    color: "blue.3"
  }, "Text with theme.colors.blue[3] color"), /* @__PURE__ */ React.createElement(Button, {
    color: "pink.4"
  }, "Button with theme.colors.pink[4] color"));
}
const colorsIndex = {
  type: "demo",
  component: Demo,
  code
};

export { colorsIndex };
//# sourceMappingURL=Theme.demo.colorsIndex.js.map
