import { Carousel } from '@mantine/carousel';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import { Slides } from './_slides.js';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <MantineProvider theme={{ dir: 'rtl' }}>
      <Carousel orientation="vertical" height={200} withIndicators sx={{ maxWidth: 320 }} mx="auto">
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </MantineProvider>
  );
}
`;
function Demo() {
  document.documentElement.dir = "rtl";
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    theme: { dir: "rtl" }
  }, /* @__PURE__ */ React.createElement(Carousel, {
    orientation: "vertical",
    height: 200,
    withIndicators: true,
    sx: { maxWidth: 320 },
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Slides, {
    count: 5
  })));
}
const verticalRTL = {
  type: "demo",
  component: Demo,
  code
};

export { verticalRTL };
//# sourceMappingURL=Carousel.demo.vertical-rtl.js.map
