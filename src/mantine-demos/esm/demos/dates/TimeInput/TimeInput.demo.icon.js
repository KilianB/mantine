import React from 'react';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TimeInput, {
    icon: /* @__PURE__ */ React.createElement(IconClock, {
      size: "1rem",
      stroke: 1.5
    }),
    maw: 400,
    mx: "auto"
  });
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=TimeInput.demo.icon.js.map
