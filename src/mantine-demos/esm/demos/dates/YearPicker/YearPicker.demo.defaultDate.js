import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker defaultDate={new Date(2040, 1)} value={value} onChange={setValue} />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(YearPicker, {
    defaultDate: new Date(2040, 1),
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
//# sourceMappingURL=YearPicker.demo.defaultDate.js.map
