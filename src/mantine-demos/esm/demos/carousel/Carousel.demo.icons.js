import React from 'react';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { Slides } from './_slides.js';

const code = `
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      height={180}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
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
    height: 180,
    nextControlIcon: /* @__PURE__ */ React.createElement(IconArrowRight, {
      size: 16
    }),
    previousControlIcon: /* @__PURE__ */ React.createElement(IconArrowLeft, {
      size: 16
    })
  }, /* @__PURE__ */ React.createElement(Slides, {
    count: 5
  }));
}
const icons = {
  type: "demo",
  component: Demo,
  code
};

export { icons };
//# sourceMappingURL=Carousel.demo.icons.js.map
