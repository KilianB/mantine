import React from 'react';
import { Box, TextInput } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<TextInput error />

// Error as React node \u2013 red border color and message below input
<TextInput error="Invalid email" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Your email",
    placeholder: "you@email.com",
    error: true
  }), /* @__PURE__ */ React.createElement(TextInput, {
    mt: "md",
    label: "Your email",
    placeholder: "you@email.com",
    error: "Invalid email"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=TextInput.demo.validation.js.map
