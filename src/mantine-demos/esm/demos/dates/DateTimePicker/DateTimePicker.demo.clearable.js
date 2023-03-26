import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={new Date()}
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
    clearable: true,
    defaultValue: new Date(),
    label: "Pick date and time",
    placeholder: "Pick date and time",
    maw: 400,
    mx: "auto"
  });
}
const clearable = {
  type: "demo",
  component: Demo,
  code
};

export { clearable };
//# sourceMappingURL=DateTimePicker.demo.clearable.js.map
