import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      withSeconds
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
    withSeconds: true,
    label: "Pick date and time",
    placeholder: "Pick date and time",
    maw: 400,
    mx: "auto"
  });
}
const withSeconds = {
  type: "demo",
  component: Demo,
  code
};

export { withSeconds };
//# sourceMappingURL=DateTimePicker.demo.withSeconds.js.map
