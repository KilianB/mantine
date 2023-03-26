import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        defaultLevel="decade"
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        monthLabelFormat="MM/YY"
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
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    defaultLevel: "decade",
    decadeLabelFormat: "YY",
    yearLabelFormat: "YYYY [year]",
    monthLabelFormat: "MM/YY",
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
//# sourceMappingURL=DatePicker.demo.labelFormat.js.map
