import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

const eventsCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;
function EventsDemo() {
  const idle = useIdle(2e3, { events: ["click", "touchstart"] });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
const useIdleEvents = {
  type: "demo",
  code: eventsCode,
  component: EventsDemo
};

export { useIdleEvents };
//# sourceMappingURL=use-idle.demo.events.js.map
