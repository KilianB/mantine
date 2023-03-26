import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
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
    dropdownType: "modal",
    label: "Pick date and time",
    placeholder: "Pick date and time",
    maw: 400,
    mx: "auto"
  });
}
const modal = {
  type: "demo",
  component: Demo,
  code
};

export { modal };
//# sourceMappingURL=DateTimePicker.demo.modal.js.map
