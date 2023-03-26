import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    maxLevel: "year"
  }), /* @__PURE__ */ React.createElement(DatePicker, {
    maxLevel: "month"
  }));
}
const maxLevel = {
  type: "demo",
  component: Demo,
  code
};

export { maxLevel };
//# sourceMappingURL=DatePicker.demo.maxLevel.js.map
