import React from 'react';
import { Box, PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return <PasswordInput disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Disabled without value",
    placeholder: "Your password",
    disabled: true
  }), /* @__PURE__ */ React.createElement(PasswordInput, {
    mt: "md",
    label: "Disabled with value",
    placeholder: "Your password",
    disabled: true,
    value: "secret"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=PasswordInput.demo.disabled.js.map
