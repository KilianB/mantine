import React from 'react';
import { Group, PinInput } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput length={6} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(PinInput, {
    length: 6
  }));
}
const length = {
  type: "demo",
  component: Demo,
  code
};

export { length };
//# sourceMappingURL=PinInput.demo.length.js.map
