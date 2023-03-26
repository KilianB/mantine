import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="MultiSelect with native scrollbars"
      placeholder="Dropdown rendered as div element"
      dropdownComponent="div"
    />
  );
}
`;
const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 320,
    mx: "auto",
    data,
    label: "MultiSelect with native scrollbars",
    placeholder: "Dropdown rendered as div element",
    dropdownComponent: "div"
  });
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

export { scrollbars };
//# sourceMappingURL=MultiSelect.demo.scrollbars.js.map
