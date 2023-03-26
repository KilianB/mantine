import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NumberInput, {
    maw: 320,
    mx: "auto",
    label: "Enter your age",
    placeholder: "Your age",
    disabled: true,
    value: 20
  });
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=NumberInput.demo.disabled.js.map
