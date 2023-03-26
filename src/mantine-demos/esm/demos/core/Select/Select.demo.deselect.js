import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return <Select allowDeselect />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    allowDeselect: true,
    withinPortal: true,
    defaultValue: "react",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  });
}
const deselect = {
  type: "demo",
  code,
  component: Demo
};

export { deselect };
//# sourceMappingURL=Select.demo.deselect.js.map
