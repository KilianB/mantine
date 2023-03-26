import React from 'react';
import { Box, NativeSelect } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<NativeSelect error />

// Error as React node \u2013 red border color and message below input
<NativeSelect error="Pick at least one item" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(NativeSelect, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one",
    error: true
  }), /* @__PURE__ */ React.createElement(NativeSelect, {
    mt: "md",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one",
    error: "Pick at least one item"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=NativeSelect.demo.validation.js.map
