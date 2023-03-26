import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    firstDayOfWeek: 0
  }), /* @__PURE__ */ React.createElement(DatePicker, {
    firstDayOfWeek: 6
  }));
}
const firstDayOfWeek = {
  type: "demo",
  component: Demo,
  code
};

export { firstDayOfWeek };
//# sourceMappingURL=DatePicker.demo.firstDayOfWeek.js.map
