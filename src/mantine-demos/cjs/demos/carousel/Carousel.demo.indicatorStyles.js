'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var core = require('@mantine/core');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(carousel.Carousel, {
    maw: 320,
    mx: "auto",
    withIndicators: true,
    height: 200,
    styles: {
      indicator: {
        width: core.rem(12),
        height: core.rem(4),
        transition: "width 250ms ease",
        "&[data-active]": {
          width: core.rem(40)
        }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(_slides.Slides, {
    count: 5
  }));
}
const indicatorStyles = {
  type: "demo",
  component: Demo,
  code
};

exports.indicatorStyles = indicatorStyles;
//# sourceMappingURL=Carousel.demo.indicatorStyles.js.map
