'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var iconsReact = require('@tabler/icons-react');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(carousel.Carousel, {
    maw: 320,
    mx: "auto",
    height: 180,
    nextControlIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowRight, {
      size: 16
    }),
    previousControlIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowLeft, {
      size: 16
    })
  }, /* @__PURE__ */ React__default.createElement(_slides.Slides, {
    count: 5
  }));
}
const icons = {
  type: "demo",
  component: Demo,
  code
};

exports.icons = icons;
//# sourceMappingURL=Carousel.demo.icons.js.map
