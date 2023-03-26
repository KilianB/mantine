import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
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
    valueFormat: "DD/MM/YYYY HH:mm:ss",
    label: "Date input",
    placeholder: "Date input",
    maw: 400,
    mx: "auto"
  });
}
const time = {
  type: "demo",
  component: Demo,
  code
};

export { time };
//# sourceMappingURL=DateInput.demo.time.js.map
