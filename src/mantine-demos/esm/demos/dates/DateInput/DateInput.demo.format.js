import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="YYYY MMM DD"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, {
    valueFormat: "YYYY MMM DD",
    label: "Date input",
    placeholder: "Date input",
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
//# sourceMappingURL=DateInput.demo.format.js.map
