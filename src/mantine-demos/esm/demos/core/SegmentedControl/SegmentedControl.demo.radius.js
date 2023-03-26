import React from 'react';
import { MANTINE_SIZES, Box } from '@mantine/core';
import { SegmentedControlWrapper } from './Wrapper.js';

function Demo() {
  const items = MANTINE_SIZES.map((size, index) => /* @__PURE__ */ React.createElement(Box, {
    mt: index === 0 ? void 0 : "md",
    key: size
  }, /* @__PURE__ */ React.createElement(SegmentedControlWrapper, {
    size: "lg",
    radius: size
  })));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, items);
}
const radius = {
  type: "demo",
  component: Demo
};

export { radius };
//# sourceMappingURL=SegmentedControl.demo.radius.js.map
