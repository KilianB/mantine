import 'dayjs/locale/ru';
import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker locale="ru" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    locale: "ru"
  }));
}
const locale = {
  type: "demo",
  component: Demo,
  code
};

export { locale };
//# sourceMappingURL=DatePicker.demo.locale.js.map
