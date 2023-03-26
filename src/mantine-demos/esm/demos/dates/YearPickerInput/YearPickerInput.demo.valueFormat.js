import React from 'react';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(YearPickerInput, {
    valueFormat: "YY",
    type: "multiple",
    label: "Pick year",
    placeholder: "Pick year",
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
//# sourceMappingURL=YearPickerInput.demo.valueFormat.js.map
