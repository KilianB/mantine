import React from 'react';
import { Box, TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Custom layout",
    placeholder: "Custom layout",
    description: "Description below the input",
    inputWrapperOrder: ["label", "error", "input", "description"]
  }), /* @__PURE__ */ React.createElement(TextInput, {
    mt: "xl",
    label: "Custom layout",
    placeholder: "Custom layout",
    description: "Error and description are",
    error: "both below the input",
    inputWrapperOrder: ["label", "input", "description", "error"]
  }));
}
const order = {
  type: "demo",
  component: Demo,
  code
};

export { order };
//# sourceMappingURL=Input.demo.order.js.map
