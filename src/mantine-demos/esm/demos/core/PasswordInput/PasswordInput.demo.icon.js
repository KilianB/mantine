import React from 'react';
import { IconLock } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size="1rem" />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(PasswordInput, {
    maw: 320,
    mx: "auto",
    label: "Your password",
    placeholder: "Your password",
    icon: /* @__PURE__ */ React.createElement(IconLock, {
      size: "1rem"
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=PasswordInput.demo.icon.js.map
