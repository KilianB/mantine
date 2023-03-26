'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { AspectRatio, Image } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={720 / 1080} maw={300} mx="auto">
      <Image
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.AspectRatio, {
    ratio: 720 / 1080,
    maw: 300,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    src: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    alt: "Panda"
  }));
}
const image = {
  type: "demo",
  component: Demo,
  code
};

exports.image = image;
//# sourceMappingURL=AspectRatio.demo.image.js.map
