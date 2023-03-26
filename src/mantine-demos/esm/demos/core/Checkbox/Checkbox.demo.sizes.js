import React from 'react';
import { MANTINE_SIZES, Checkbox, Stack } from '@mantine/core';

function Demo() {
  const items = MANTINE_SIZES.map((size) => /* @__PURE__ */ React.createElement(Checkbox, {
    key: size,
    size,
    defaultChecked: true,
    label: `${size} checkbox`
  }));
  return /* @__PURE__ */ React.createElement(Stack, {
    spacing: "sm"
  }, items);
}
const sizes = {
  type: "demo",
  component: Demo
};

export { sizes };
//# sourceMappingURL=Checkbox.demo.sizes.js.map
