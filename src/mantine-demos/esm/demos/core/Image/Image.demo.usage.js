import React from 'react';
import { Image } from '@mantine/core';

const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image maw={240} mx="auto" radius="md" src="./avatar.png" alt="Random image" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Image, {
    maw: 240,
    mx: "auto",
    radius: "md",
    src: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    alt: "Random unsplash image"
  });
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Image.demo.usage.js.map
