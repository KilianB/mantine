import React from 'react';
import { Group, PinInput } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="\u22A1" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(PinInput, {
    placeholder: "\u22A1"
  }));
}
const placeholder = {
  type: "demo",
  component: Demo,
  code
};

export { placeholder };
//# sourceMappingURL=PinInput.demo.placeholder.js.map
