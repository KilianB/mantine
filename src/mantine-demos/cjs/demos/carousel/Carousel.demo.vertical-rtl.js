'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var carousel = require('@mantine/carousel');
var core = require('@mantine/core');
var React = require('react');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    theme: { dir: "rtl" }
  }, /* @__PURE__ */ React__default.createElement(carousel.Carousel, {
    orientation: "vertical",
    height: 200,
    withIndicators: true,
    sx: { maxWidth: 320 },
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(_slides.Slides, {
    count: 5
  })));
}
const verticalRTL = {
  type: "demo",
  component: Demo,
  code
};

exports.verticalRTL = verticalRTL;
//# sourceMappingURL=Carousel.demo.vertical-rtl.js.map
