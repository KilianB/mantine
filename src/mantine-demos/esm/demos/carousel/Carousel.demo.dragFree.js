import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides.js';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      height={200}
      dragFree
      slideGap="md"
      align="start"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Carousel, {
    maw: 320,
    mx: "auto",
    withIndicators: true,
    height: 200,
    dragFree: true,
    slideGap: "md",
    align: "start"
  }, /* @__PURE__ */ React.createElement(Slides, {
    count: 5
  }));
}
const dragFree = {
  type: "demo",
  component: Demo,
  code
};

export { dragFree };
//# sourceMappingURL=Carousel.demo.dragFree.js.map
