import React, { useState } from 'react';
import { AspectRatio, Image, Overlay, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Button, Overlay, Image, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <Image
        src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        onClick={() => setVisible(false)}
      />
      {!visible && (
        <Overlay blur={15} center>
          <Button color="red" radius="xl" onClick={() => setVisible(true)}>
            NSFW, click to reveal
          </Button>
        </Overlay>
      )}
    </AspectRatio>
  );
}
`;
function Demo() {
  const [visible, setVisible] = useState(false);
  return /* @__PURE__ */ React.createElement(AspectRatio, {
    ratio: 16 / 9,
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Image, {
    src: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    onClick: () => setVisible(false)
  }), !visible && /* @__PURE__ */ React.createElement(Overlay, {
    blur: 15,
    center: true
  }, /* @__PURE__ */ React.createElement(Button, {
    color: "red",
    radius: "xl",
    onClick: () => setVisible(true)
  }, "NSFW, click to reveal")));
}
const blur = {
  type: "demo",
  code,
  component: Demo
};

export { blur };
//# sourceMappingURL=Overlay.demo.blur.js.map
