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
      height={200}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
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
    height: 200,
    styles: {
      control: {
        "&[data-inactive]": {
          opacity: 0,
          cursor: "default"
        }
      }
    }
  }, /* @__PURE__ */ React.createElement(Slides, {
    count: 5
  }));
}
const controlsStyles = {
  type: "demo",
  component: Demo,
  code
};

export { controlsStyles };
//# sourceMappingURL=Carousel.demo.controlsStyles.js.map
