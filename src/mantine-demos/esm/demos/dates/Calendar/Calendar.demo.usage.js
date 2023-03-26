import React from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, null));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=Calendar.demo.usage.js.map
