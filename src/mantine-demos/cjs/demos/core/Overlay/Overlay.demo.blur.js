'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button, Overlay, Image, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <Image
        src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        onClick={() => setVisible(false)}
      />
      {!visible && (
        <Overlay blur={15} center>
          <Button color="red" radius="xl" onClick={() => setVisible(true)}>
            NSFW, click to reveal
          </Button>
        </Overlay>
      )}
    </AspectRatio>
  );
}
`;
function Demo() {
  const [visible, setVisible] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(core.AspectRatio, {
    ratio: 16 / 9,
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    src: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    onClick: () => setVisible(false)
  }), !visible && /* @__PURE__ */ React__default.createElement(core.Overlay, {
    blur: 15,
    center: true
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    color: "red",
    radius: "xl",
    onClick: () => setVisible(true)
  }, "NSFW, click to reveal")));
}
const blur = {
  type: "demo",
  code,
  component: Demo
};

exports.blur = blur;
//# sourceMappingURL=Overlay.demo.blur.js.map
