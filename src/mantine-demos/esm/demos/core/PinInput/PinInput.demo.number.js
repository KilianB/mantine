import React from 'react';
import { Group, PinInput } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type="number" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(PinInput, {
    type: "number"
  }));
}
const number = {
  type: "demo",
  component: Demo,
  code
};

export { number };
//# sourceMappingURL=PinInput.demo.number.js.map
