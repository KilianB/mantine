import React from 'react';
import { Group, PinInput } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput disabled />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(PinInput, {
    disabled: true
  }));
}
const disabled = {
  type: "demo",
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=PinInput.demo.disabled.js.map
