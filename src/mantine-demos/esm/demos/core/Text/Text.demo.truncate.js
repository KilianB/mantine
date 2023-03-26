import React from 'react';
import { Box, Text } from '@mantine/core';

const code = `
import { Text, Box } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text truncate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    w: 300
  }, /* @__PURE__ */ React.createElement(Text, {
    truncate: true
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"));
}
const truncate = {
  type: "demo",
  component: Demo,
  code
};

export { truncate };
//# sourceMappingURL=Text.demo.truncate.js.map
