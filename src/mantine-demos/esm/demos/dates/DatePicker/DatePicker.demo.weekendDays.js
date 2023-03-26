import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    weekendDays: [1, 2]
  }));
}
const weekendDays = {
  type: "demo",
  component: Demo,
  code
};

export { weekendDays };
//# sourceMappingURL=DatePicker.demo.weekendDays.js.map
