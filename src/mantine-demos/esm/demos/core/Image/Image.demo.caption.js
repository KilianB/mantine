import React from 'react';
import { Box, Image } from '@mantine/core';

const code = `
import { Image, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={240} mx="auto">
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
        alt="Random unsplash image"
        caption="My dog begging for treats"
      />
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 240,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Image, {
    radius: "md",
    src: "https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80",
    alt: "Random unsplash image",
    caption: "My dog begging for treats"
  }));
}
const caption = {
  type: "demo",
  code,
  component: Demo
};

export { caption };
//# sourceMappingURL=Image.demo.caption.js.map
