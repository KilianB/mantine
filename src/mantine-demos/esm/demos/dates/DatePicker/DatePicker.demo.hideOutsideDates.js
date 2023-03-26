import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideOutsideDates />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    hideOutsideDates: true
  }));
}
const hideOutsideDates = {
  type: "demo",
  component: Demo,
  code
};

export { hideOutsideDates };
//# sourceMappingURL=DatePicker.demo.hideOutsideDates.js.map
