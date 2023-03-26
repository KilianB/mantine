import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
        { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
        { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
        { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite Rick and Morty character",
    placeholder: "Pick one",
    withinPortal: true,
    data: [
      { value: "rick", label: "Rick", group: "Used to be a pickle" },
      { value: "morty", label: "Morty", group: "Never was a pickle" },
      { value: "beth", label: "Beth", group: "Never was a pickle" },
      { value: "summer", label: "Summer", group: "Never was a pickle" }
    ]
  });
}
const group = {
  type: "demo",
  code,
  component: Demo
};

export { group };
//# sourceMappingURL=Select.demo.group.js.map
