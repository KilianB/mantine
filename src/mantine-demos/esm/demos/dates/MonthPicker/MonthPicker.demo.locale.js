import 'dayjs/locale/ru';
import React from 'react';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker locale="ru" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(MonthPicker, {
    locale: "ru"
  }));
}
const locale = {
  type: "demo",
  component: Demo,
  code
};

export { locale };
//# sourceMappingURL=MonthPicker.demo.locale.js.map
