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
      <YearPicker
        value={value}
        onChange={setValue}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2028, 1)}
      />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(YearPicker, {
    value,
    onChange: setValue,
    minDate: new Date(2021, 1),
    maxDate: new Date(2028, 1)
  }));
}
const minMax = {
  type: "demo",
  component: Demo,
  code
};

export { minMax };
//# sourceMappingURL=YearPicker.demo.minMax.js.map
