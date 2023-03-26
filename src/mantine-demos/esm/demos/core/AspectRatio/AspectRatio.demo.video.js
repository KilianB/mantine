import React from 'react';
import { AspectRatio } from '@mantine/core';

const code = `
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/Dorf8i6lCuk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(AspectRatio, {
    ratio: 16 / 9
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://www.youtube.com/embed/Dorf8i6lCuk",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }));
}
const video = {
  type: "demo",
  component: Demo,
  code
};

export { video };
//# sourceMappingURL=AspectRatio.demo.video.js.map
