import React from 'react';
import { Box, PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput
        label="Toggle button is not focusable"
        placeholder="Toggle button is not focusable"
      />

      <PasswordInput
        label="Toggle button is focusable"
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 360,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Toggle button is not focusable",
    placeholder: "Toggle button is not focusable",
    toggleTabIndex: -1
  }), /* @__PURE__ */ React.createElement(PasswordInput, {
    mt: "md",
    label: "Toggle button is focusable",
    placeholder: "Toggle button is focusable",
    toggleTabIndex: 0
  }));
}
const focus = {
  type: "demo",
  code,
  component: Demo
};

export { focus };
//# sourceMappingURL=PasswordInput.demo.focus.js.map
