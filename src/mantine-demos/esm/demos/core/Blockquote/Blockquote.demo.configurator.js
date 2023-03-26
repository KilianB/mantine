import React from 'react';
import { Box, Blockquote } from '@mantine/core';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Blockquote, __spreadValues({}, props)));
}
const codeTemplate = (props, children) => `
import { Blockquote } from '@mantine/core';

function Demo() {
  return (
    <Blockquote${props}>
      ${children}
    </Blockquote>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "gray", defaultValue: "gray" },
    { name: "cite", type: "string", initialValue: "\u2013 Forrest Gump" },
    {
      name: "children",
      type: "string",
      initialValue: "Life is like an npm install \u2013 you never know what you are going to get."
    }
  ]
};

export { configurator };
//# sourceMappingURL=Blockquote.demo.configurator.js.map
