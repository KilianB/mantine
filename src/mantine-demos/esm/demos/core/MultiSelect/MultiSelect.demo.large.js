import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Large data set"
      placeholder="Scroll to see all options"
      maxDropdownHeight={160}
    />
  );
}
`;
const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    label: "Large data set",
    placeholder: "Scroll to see all options",
    maxDropdownHeight: 160
  });
}
const large = {
  type: "demo",
  code,
  component: Demo
};

export { large };
//# sourceMappingURL=MultiSelect.demo.large.js.map
