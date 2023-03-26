import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateTimePicker, {
    label: "Pick date and time",
    placeholder: "Pick date and time",
    maw: 400,
    mx: "auto",
    popoverProps: { withinPortal: true }
  });
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=DateTimePicker.demo.usage.js.map
