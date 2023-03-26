import React from 'react';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(MonthPicker, {
    maxLevel: "year"
  }));
}
const maxLevel = {
  type: "demo",
  component: Demo,
  code
};

export { maxLevel };
//# sourceMappingURL=MonthPicker.demo.maxLevel.js.map
