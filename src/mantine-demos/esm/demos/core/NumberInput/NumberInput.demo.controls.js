import React from 'react';
import { Box, NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="By default controls are visible" />

      <NumberInput
        hideControls
        label="Disable them with hideControls prop"
      />

      <NumberInput
        label="Disabled"
        disabled
        label="Controls also not rendered when input is disabled"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 420,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "By default controls are visible",
    placeholder: "Controls are visible"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    mt: "md",
    hideControls: true,
    label: "Disable them with hideControls prop",
    placeholder: "Controls are disabled"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    mt: "md",
    disabled: true,
    label: "Controls also not rendered when input is disabled",
    placeholder: "Input disabled"
  }));
}
const controls = {
  type: "demo",
  code,
  component: Demo
};

export { controls };
//# sourceMappingURL=NumberInput.demo.controls.js.map
