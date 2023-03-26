import React from 'react';
import { useFullscreen } from '@mantine/hooks';
import { Stack, Image, Button } from '@mantine/core';

const refCode = `
import { useFullscreen } from '@mantine/hooks';
import { Button, Image } from '@mantine/core';

function Demo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <>
      <Image
        ref={ref}
        src="https://unsplash.com/image.jpg"
        alt="Unsplash Image to make Fullscreen"
        width={200}
      />

      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </>
  );
}
`;
function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();
  return /* @__PURE__ */ React.createElement(Stack, {
    align: "center"
  }, /* @__PURE__ */ React.createElement(Image, {
    ref,
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    alt: "Unsplash Image to make Fullscreen",
    width: 200
  }), /* @__PURE__ */ React.createElement(Button, {
    onClick: toggle,
    color: fullscreen ? "red" : "blue"
  }, fullscreen ? "Exit Fullscreen" : "View Image Fullscreen"));
}
const useFullscreenRefDemo = {
  type: "demo",
  code: refCode,
  component: RefDemo
};

export { useFullscreenRefDemo };
//# sourceMappingURL=use-fullscreen.demo.ref.js.map
