import React from 'react';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { Slides } from './_slides.js';

const code = `
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';

function Demo() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      height={200}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: rem(40),
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
    withIndicators: true,
    height: 200,
    styles: {
      indicator: {
        width: rem(12),
        height: rem(4),
        transition: "width 250ms ease",
        "&[data-active]": {
          width: rem(40)
        }
      }
    }
  }, /* @__PURE__ */ React.createElement(Slides, {
    count: 5
  }));
}
const indicatorStyles = {
  type: "demo",
  component: Demo,
  code
};

export { indicatorStyles };
//# sourceMappingURL=Carousel.demo.indicatorStyles.js.map
