import React from 'react';
import { Group, ScrollArea, Box } from '@mantine/core';
import { Content } from './_content.js';

const code = `
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ScrollArea, {
    w: 300,
    h: 200
  }, /* @__PURE__ */ React.createElement(Box, {
    w: 600
  }, /* @__PURE__ */ React.createElement(Content, null))));
}
const horizontal = {
  type: "demo",
  component: Demo,
  code
};

export { horizontal };
//# sourceMappingURL=ScrollArea.demo.horizontal.js.map
