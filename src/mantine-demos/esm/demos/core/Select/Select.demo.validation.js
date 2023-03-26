import React from 'react';
import { Box, Select } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<Select error />

// Error as React node \u2013 red border color and message below input
<Select error="Pick at least one item" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Select, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    withinPortal: true,
    error: true
  }), /* @__PURE__ */ React.createElement(Select, {
    mt: "md",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    error: "Pick at least one item",
    withinPortal: true
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=Select.demo.validation.js.map
