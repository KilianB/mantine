'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const code = `
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, useMantineTheme, rem } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={rem(20)} color={getColor('red')} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;
function IconsReplacementDemo(props) {
  const theme = core.useMantineTheme();
  const getColor = (color) => theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];
  return /* @__PURE__ */ React__default.createElement(core.Accordion, __spreadValues({
    variant: "contained"
  }, props), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    value: "photos"
  }, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, {
      size: core.rem(20),
      color: getColor("red")
    })
  }, "Recent photos"), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Content")), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    value: "print"
  }, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconPrinter, {
      size: core.rem(20),
      color: getColor("blue")
    })
  }, "Print photos"), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Content")), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    value: "camera"
  }, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCameraSelfie, {
      size: core.rem(20),
      color: getColor("teal")
    })
  }, "Camera settings"), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Content")));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(IconsReplacementDemo, null));
}
const icons = {
  type: "demo",
  component: Demo,
  code
};

exports.IconsReplacementDemo = IconsReplacementDemo;
exports.icons = icons;
//# sourceMappingURL=Accordion.demo.icons.js.map
