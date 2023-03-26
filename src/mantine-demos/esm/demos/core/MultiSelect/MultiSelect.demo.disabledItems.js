import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="MultiSelect with disabled items"
      placeholder="Select items"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue', disabled: true },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    label: "MultiSelect with disabled items",
    placeholder: "Select items",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue", disabled: true }
    ]
  });
}
const disabledItems = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, disabledItems };
//# sourceMappingURL=MultiSelect.demo.disabledItems.js.map
