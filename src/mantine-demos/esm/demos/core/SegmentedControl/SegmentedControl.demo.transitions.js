import React from 'react';
import { Flex, Text } from '@mantine/core';
import { SegmentedControlWrapper } from './Wrapper.js';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* No transitions */}
      <SegmentedControl transitionDuration={0} />

      {/* 500ms linear transition */}
      <SegmentedControl
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Flex, {
    direction: "column",
    align: "center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    weight: 500,
    mt: 3
  }, "No transitions"), /* @__PURE__ */ React.createElement(SegmentedControlWrapper, {
    transitionDuration: 0
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    weight: 500,
    mt: "md"
  }, "500ms linear transition"), /* @__PURE__ */ React.createElement(SegmentedControlWrapper, {
    transitionDuration: 500,
    transitionTimingFunction: "linear"
  })));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=SegmentedControl.demo.transitions.js.map
