import React from 'react';
import { MANTINE_COLORS, Badge, Group } from '@mantine/core';

function Demo() {
  const items = MANTINE_COLORS.map((color) => /* @__PURE__ */ React.createElement(Badge, {
    key: color,
    color,
    variant: "dot"
  }, color));
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, items);
}
const dots = {
  type: "demo",
  component: Demo
};

export { dots };
//# sourceMappingURL=Badge.demo.dots.js.map
