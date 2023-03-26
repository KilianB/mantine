import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
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
    valueFormat: "DD MMM YYYY hh:mm A",
    label: "Pick date and time",
    placeholder: "Pick date and time",
    maw: 400,
    mx: "auto"
  });
}
const format = {
  type: "demo",
  component: Demo,
  code
};

export { format };
//# sourceMappingURL=DateTimePicker.demo.format.js.map
