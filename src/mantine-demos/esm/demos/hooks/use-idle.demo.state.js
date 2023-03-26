import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

const initialStateCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;
function InitialStateDemo() {
  const idle = useIdle(2e3, { initialState: false });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
const useIdleInitialState = {
  type: "demo",
  code: initialStateCode,
  component: InitialStateDemo
};

export { useIdleInitialState };
//# sourceMappingURL=use-idle.demo.state.js.map
