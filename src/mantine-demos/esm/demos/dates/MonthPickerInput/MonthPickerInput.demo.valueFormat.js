import React from 'react';
import { MonthPickerInput } from '@mantine/dates';

const code = `
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
      mx="auto"
      maw={400}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MonthPickerInput, {
    valueFormat: "YYYY MMM",
    type: "multiple",
    label: "Pick month",
    placeholder: "Pick month",
    mx: "auto",
    maw: 400
  });
}
const valueFormat = {
  type: "demo",
  component: Demo,
  code
};

export { valueFormat };
//# sourceMappingURL=MonthPickerInput.demo.valueFormat.js.map
