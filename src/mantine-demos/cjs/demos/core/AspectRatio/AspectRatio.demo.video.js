'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/Dorf8i6lCuk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.AspectRatio, {
    ratio: 16 / 9
  }, /* @__PURE__ */ React__default.createElement("iframe", {
    src: "https://www.youtube.com/embed/Dorf8i6lCuk",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }));
}
const video = {
  type: "demo",
  component: Demo,
  code
};

exports.video = video;
//# sourceMappingURL=AspectRatio.demo.video.js.map
