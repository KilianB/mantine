import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { images as images$1 } from './_images.js';

const code = `
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel maw={320} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}
`;
function Demo() {
  const slides = images$1.map((url) => /* @__PURE__ */ React.createElement(Carousel.Slide, {
    key: url
  }, /* @__PURE__ */ React.createElement(Image, {
    src: url
  })));
  return /* @__PURE__ */ React.createElement(Carousel, {
    maw: 320,
    mx: "auto",
    withIndicators: true
  }, slides);
}
const images = {
  type: "demo",
  component: Demo,
  code
};

export { images };
//# sourceMappingURL=Carousel.demo.images.js.map
