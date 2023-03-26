import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <Select
      data={data}
      label="Select with native scrollbars"
      placeholder="Dropdown with native scrollbars"
      dropdownComponent="div"
    />
  );
}
`;
const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
function Demo() {
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    data,
    label: "Select with native scrollbars",
    placeholder: "Dropdown with native scrollbars",
    dropdownComponent: "div",
    withinPortal: true
  });
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

export { scrollbars };
//# sourceMappingURL=Select.demo.scrollbars.js.map
