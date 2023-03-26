import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideWeekdays />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    hideWeekdays: true
  }));
}
const hideWeekdays = {
  type: "demo",
  component: Demo,
  code
};

export { hideWeekdays };
//# sourceMappingURL=DatePicker.demo.hideWeekdays.js.map
