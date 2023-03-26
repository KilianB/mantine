'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');
var _demoBase = require('./_demo-base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box maw={400} pos="relative">
        <LoadingOverlay visible={visible} overlayBlur={2} />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;
function Demo() {
  const [visible, { toggle }] = hooks.useDisclosure(false);
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Box, {
    style: {
      borderRadius: core.rem(4),
      position: "relative",
      margin: "auto"
    }
  }, /* @__PURE__ */ React__default.createElement(core.LoadingOverlay, {
    visible,
    zIndex: 1e3,
    sx: { borderRadius: core.rem(4) },
    overlayBlur: 2
  }), /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noSubmit: true,
    noShadow: theme.colorScheme === "dark"
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: toggle
  }, "Toggle overlay")));
}
const usage = __spreadProps(__spreadValues({}, _demoBase.demoBase), {
  type: "demo",
  code,
  component: Demo
});

exports.Demo = Demo;
exports.usage = usage;
//# sourceMappingURL=LoadingOverlay.demo.usage.js.map
