import React from 'react';
import { Group, RingProgress } from '@mantine/core';

const code = `
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(RingProgress, {
    sections: [{ value: 40, color: "yellow" }],
    rootColor: "red"
  }));
}
const rootColor = {
  type: "demo",
  code,
  component: Demo
};

export { rootColor };
//# sourceMappingURL=RingProgress.demo.rootColor.js.map
