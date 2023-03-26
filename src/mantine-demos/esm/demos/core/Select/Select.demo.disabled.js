import React from 'react';
import { Box, Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return <Select disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Select, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled without value",
    placeholder: "Pick all that you like",
    disabled: true,
    withinPortal: true
  }), /* @__PURE__ */ React.createElement(Select, {
    mt: "md",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled with value",
    placeholder: "Pick all that you like",
    disabled: true,
    withinPortal: true,
    value: "React"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=Select.demo.disabled.js.map
