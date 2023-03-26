import React from 'react';
import { Box, ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    label: "Disabled without value",
    placeholder: "Your favorite color",
    disabled: true
  }), /* @__PURE__ */ React.createElement(ColorInput, {
    mt: "md",
    label: "Disabled with value",
    placeholder: "Your favorite color",
    disabled: true,
    value: "#EFD679"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=ColorInput.demo.disabled.js.map
