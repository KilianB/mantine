'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var carousel = require('@mantine/carousel');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const useStyles = core.createStyles(() => ({
  controls: {
    ref: core.getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0
  },
  root: {
    "&:hover": {
      [`& .${core.getStylesRef("controls")}`]: {
        opacity: 1
      }
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement(carousel.Carousel, {
    maw: 320,
    mx: "auto",
    height: 200,
    classNames: classes
  }, /* @__PURE__ */ React__default.createElement(_slides.Slides, {
    count: 5
  }));
}
const controlsHover = {
  type: "demo",
  component: Demo,
  code
};

exports.controlsHover = controlsHover;
//# sourceMappingURL=Carousel.demo.controlsHover.js.map
