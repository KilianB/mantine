import React from 'react';
import { Box, ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Error as boolean \u2013 red border color */}
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      {/* Error as React node \u2013 red border color and message below input */}
      <ColorInput
        mt="md"
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    label: "Your favorite color",
    placeholder: "Enter color",
    error: true
  }), /* @__PURE__ */ React.createElement(ColorInput, {
    mt: "md",
    label: "Your favorite color",
    placeholder: "Enter color",
    error: "You cannot pick white"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=ColorInput.demo.validation.js.map
