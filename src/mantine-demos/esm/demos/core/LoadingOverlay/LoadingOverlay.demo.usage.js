import React from 'react';
import { useMantineTheme, Box, rem, LoadingOverlay, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';
import { demoBase } from './_demo-base.js';

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
  const [visible, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, {
    style: {
      borderRadius: rem(4),
      position: "relative",
      margin: "auto"
    }
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible,
    zIndex: 1e3,
    sx: { borderRadius: rem(4) },
    overlayBlur: 2
  }), /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noSubmit: true,
    noShadow: theme.colorScheme === "dark"
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: toggle
  }, "Toggle overlay")));
}
const usage = __spreadProps(__spreadValues({}, demoBase), {
  type: "demo",
  code,
  component: Demo
});

export { Demo, usage };
//# sourceMappingURL=LoadingOverlay.demo.usage.js.map
