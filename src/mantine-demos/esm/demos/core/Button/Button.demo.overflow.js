import React from 'react';
import { Flex, Box, Button } from '@mantine/core';

const code = `
import { Button, Flex, Box } from '@mantine/core';

function Demo() {
  return (
    <Flex gap="md">
      <Box w={200}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </Box>

      <Box w={140}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </Box>
    </Flex>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Flex, {
    gap: "md"
  }, /* @__PURE__ */ React.createElement(Box, {
    w: 200
  }, /* @__PURE__ */ React.createElement(Button, {
    fullWidth: true,
    variant: "outline"
  }, "Full width button")), /* @__PURE__ */ React.createElement(Box, {
    w: 140
  }, /* @__PURE__ */ React.createElement(Button, {
    fullWidth: true,
    variant: "outline"
  }, "Button with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

export { overflow };
//# sourceMappingURL=Button.demo.overflow.js.map
