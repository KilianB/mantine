import React from 'react';
import { Box, TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled />
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Disabled without value",
    placeholder: "Your email",
    disabled: true
  }), /* @__PURE__ */ React.createElement(TextInput, {
    mt: "md",
    label: "Disabled with value",
    placeholder: "Your email",
    disabled: true,
    value: "myemail@gmail.com"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=TextInput.demo.disabled.js.map
