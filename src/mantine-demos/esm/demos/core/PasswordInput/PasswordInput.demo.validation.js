import React from 'react';
import { Box, PasswordInput } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<PasswordInput error />

// Error as React node \u2013 red border color and message below input
<PasswordInput error="Invalid password" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Your password",
    placeholder: "Your password",
    error: true
  }), /* @__PURE__ */ React.createElement(PasswordInput, {
    mt: "md",
    label: "Your password",
    placeholder: "Your password",
    error: "Invalid password"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=PasswordInput.demo.validation.js.map
