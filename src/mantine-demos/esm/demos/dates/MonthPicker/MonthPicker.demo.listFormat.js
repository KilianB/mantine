import React from 'react';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(MonthPicker, {
    monthsListFormat: "MM",
    yearsListFormat: "YY"
  }));
}
const listFormat = {
  type: "demo",
  component: Demo,
  code
};

export { listFormat };
//# sourceMappingURL=MonthPicker.demo.listFormat.js.map
