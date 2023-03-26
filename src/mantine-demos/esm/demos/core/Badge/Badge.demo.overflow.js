import React from 'react';
import { Flex, Box, Badge } from '@mantine/core';

const code = `
import { Badge, Box, Flex } from '@mantine/core';

function Demo() {
  return (
    <Flex>
      <Box w={200}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </Box>

      <Box w={120} ml="md">
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </Box>
    </Flex>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Flex, null, /* @__PURE__ */ React.createElement(Box, {
    w: 200
  }, /* @__PURE__ */ React.createElement(Badge, {
    variant: "filled",
    fullWidth: true
  }, "Full width badge")), /* @__PURE__ */ React.createElement(Box, {
    w: 120,
    ml: "md"
  }, /* @__PURE__ */ React.createElement(Badge, {
    variant: "filled",
    fullWidth: true
  }, "Badge with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

export { overflow };
//# sourceMappingURL=Badge.demo.overflow.js.map
