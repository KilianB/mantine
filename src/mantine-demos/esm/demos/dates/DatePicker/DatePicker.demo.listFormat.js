import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
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
//# sourceMappingURL=DatePicker.demo.listFormat.js.map
