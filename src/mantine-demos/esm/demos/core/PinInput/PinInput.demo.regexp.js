import React from 'react';
import { Group, PinInput } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(PinInput, {
    type: /^[0-3]+/,
    inputType: "tel",
    inputMode: "numeric"
  }));
}
const regexp = {
  type: "demo",
  component: Demo,
  code
};

export { regexp };
//# sourceMappingURL=PinInput.demo.regexp.js.map
