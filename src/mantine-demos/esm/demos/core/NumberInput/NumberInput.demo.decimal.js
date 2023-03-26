import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Number input with decimal steps"
      defaultValue={0.05}
      precision={2}
      min={-1}
      step={0.05}
      max={1}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NumberInput, {
    maw: 320,
    mx: "auto",
    label: "Number input with decimal steps",
    placeholder: "Decimal steps",
    defaultValue: 0.05,
    precision: 2,
    min: -1,
    step: 0.05,
    max: 1
  });
}
const decimal = {
  type: "demo",
  code,
  component: Demo
};

export { decimal };
//# sourceMappingURL=NumberInput.demo.decimal.js.map
