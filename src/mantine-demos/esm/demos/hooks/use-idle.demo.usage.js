import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;
function Demo() {
  const idle = useIdle(2e3);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
const useIdleDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useIdleDemo };
//# sourceMappingURL=use-idle.demo.usage.js.map
