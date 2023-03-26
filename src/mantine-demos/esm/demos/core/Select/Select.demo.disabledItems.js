import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Select with disabled items"
      placeholder="Select something"
      data={[
        { value: 'react', label: 'React', disabled: true },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Select with disabled items",
    placeholder: "Select something",
    withinPortal: true,
    data: [
      { value: "react", label: "React", disabled: true },
      { value: "ng", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  });
}
const disabledItems = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, disabledItems };
//# sourceMappingURL=Select.demo.disabledItems.js.map
