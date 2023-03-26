import React from 'react';
import { Group, PinInput } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(PinInput, {
    mask: true
  }));
}
const mask = {
  type: "demo",
  component: Demo,
  code
};

export { mask };
//# sourceMappingURL=PinInput.demo.mask.js.map
