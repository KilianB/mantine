import React from 'react';
import { MANTINE_SIZES, Box, SegmentedControl } from '@mantine/core';

function Demo() {
  const items = MANTINE_SIZES.map((size, index) => /* @__PURE__ */ React.createElement(Box, {
    mt: index === 0 ? void 0 : 15,
    key: size
  }, /* @__PURE__ */ React.createElement(SegmentedControl, {
    size,
    data: ["React", "Angular", "Vue"]
  })));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, items);
}
const sizes = {
  type: "demo",
  component: Demo
};

export { sizes };
//# sourceMappingURL=SegmentedControl.demo.sizes.js.map
