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
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
        <Image src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" />
        {visible && <Overlay color="#000" opacity={0.85} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`;
function Demo() {
  const [visible, setVisible] = React.useState(true);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.AspectRatio, {
    ratio: 16 / 9,
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    src: "https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
  }), visible && /* @__PURE__ */ React__default.createElement(core.Overlay, {
    color: "#000",
    opacity: 0.85
  })), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setVisible((v) => !v),
    fullWidth: true,
    maw: 200,
    mx: "auto",
    mt: "xl"
  }, "Toggle overlay"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Overlay.demo.usage.js.map
