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
      <MonthPicker
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        value={value}
        onChange={setValue}
      />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(MonthPicker, {
    decadeLabelFormat: "YY",
    yearLabelFormat: "YYYY [year]",
    value,
    onChange: setValue
  }));
}
const labelFormat = {
  type: "demo",
  component: Demo,
  code
};

export { labelFormat };
//# sourceMappingURL=MonthPicker.demo.labelFormat.js.map
