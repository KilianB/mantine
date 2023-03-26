import React from 'react';
import { Box, Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select clearable />
      <Select searchable clearable />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    withinPortal: true,
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }), /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    searchable: true,
    withinPortal: true,
    mt: "md",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }));
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

export { clearable };
//# sourceMappingURL=Select.demo.clearable.js.map
