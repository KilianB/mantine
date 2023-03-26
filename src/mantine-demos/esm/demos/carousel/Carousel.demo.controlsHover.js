import React from 'react';
import { createStyles, getStylesRef } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides.js';

const code = `
import { createStyles, getStylesRef } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [\`& .\${getStylesRef('controls')}\`]: {
        opacity: 1,
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Carousel maw={320} mx="auto" height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0
  },
  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1
      }
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement(Carousel, {
    maw: 320,
    mx: "auto",
    height: 200,
    classNames: classes
  }, /* @__PURE__ */ React.createElement(Slides, {
    count: 5
  }));
}
const controlsHover = {
  type: "demo",
  component: Demo,
  code
};

export { controlsHover };
//# sourceMappingURL=Carousel.demo.controlsHover.js.map
