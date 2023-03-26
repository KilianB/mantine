import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput allowDeselect label="Date input" placeholder="Date input" maw={400} mx="auto" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, {
    allowDeselect: true,
    label: "Date input",
    placeholder: "Date input",
    maw: 400,
    mx: "auto"
  });
}
const deselect = {
  type: "demo",
  component: Demo,
  code
};

export { deselect };
//# sourceMappingURL=DateInput.demo.deselect.js.map
