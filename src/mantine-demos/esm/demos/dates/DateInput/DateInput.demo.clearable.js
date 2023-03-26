import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput label="Date input" placeholder="Date input" maw={400} mx="auto" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, {
    clearable: true,
    defaultValue: new Date(),
    label: "Date input",
    placeholder: "Date input",
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
//# sourceMappingURL=DateInput.demo.clearable.js.map
