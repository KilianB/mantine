import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <MonthPicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(MonthPicker, {
    defaultDate: new Date(2015, 1),
    value,
    onChange: setValue
  }));
}
const defaultDate = {
  type: "demo",
  component: Demo,
  code
};

export { defaultDate };
//# sourceMappingURL=MonthPicker.demo.defaultDate.js.map
