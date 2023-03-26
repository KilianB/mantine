import React from 'react';
import { Box, InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

const code = `
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <Box maw={320} mx="auto">
    <InputBase label="Your phone" component={IMaskInput} mask="+7 (000) 000-0000" />
      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(InputBase, {
    label: "Your phone",
    component: IMaskInput,
    mask: "+7 (000) 000-0000"
  }), /* @__PURE__ */ React.createElement(InputBase, {
    label: "Custom native select",
    component: "select",
    mt: "md"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "react"
  }, "React"), /* @__PURE__ */ React.createElement("option", {
    value: "react"
  }, "Angular"), /* @__PURE__ */ React.createElement("option", {
    value: "svelte"
  }, "Svelte")));
}
const inputBase = {
  type: "demo",
  component: Demo,
  code
};

export { inputBase };
//# sourceMappingURL=Input.demo.inputBase.js.map
