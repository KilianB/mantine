'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel maw={320} mx="auto" withIndicators height={200}>
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
    height: 200
  }, /* @__PURE__ */ React__default.createElement(_slides.Slides, {
    count: 5
  }));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=Carousel.demo.usage.js.map
