'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const image = "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80";
const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* By default image will have object-fit: cover */}
      <Image width={200} height={80} src="./image.png" />

      {/* Set fit="contain" to preserve image proportions in this case image wrapper will still have given width and height */}
      <Image width={200} height={80} fit="contain" src="./image.png" />

      {/* It's not necessary to use both width and height */}
      <Image height={80} src="./image.png" />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    width: 200,
    height: 80,
    src: image
  }), /* @__PURE__ */ React__default.createElement(core.Image, {
    width: 200,
    height: 80,
    fit: "contain",
    src: image
  }), /* @__PURE__ */ React__default.createElement(core.Image, {
    height: 80,
    src: image
  }));
}
const sizes = {
  type: "demo",
  code,
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=Image.demo.sizes.js.map
