import React from 'react';
import { IconEyeOff, IconEyeCheck } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal, size }) =>
        reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(PasswordInput, {
    maw: 320,
    mx: "auto",
    label: "Change visibility toggle icon",
    placeholder: "Change visibility toggle icon",
    defaultValue: "secret",
    visibilityToggleIcon: ({ reveal, size }) => reveal ? /* @__PURE__ */ React.createElement(IconEyeOff, {
      size
    }) : /* @__PURE__ */ React.createElement(IconEyeCheck, {
      size
    })
  });
}
const visibilityIcon = {
  type: "demo",
  component: Demo,
  code
};

export { visibilityIcon };
//# sourceMappingURL=PasswordInput.demo.visibilityIcon.js.map
