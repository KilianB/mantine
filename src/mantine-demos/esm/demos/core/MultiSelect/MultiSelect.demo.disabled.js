import React from 'react';
import { Box, MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return <MultiSelect disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Disabled without value",
    placeholder: "Won't pick anything",
    disabled: true,
    defaultValue: []
  }), /* @__PURE__ */ React.createElement(MultiSelect, {
    mt: "md",
    data,
    label: "Disabled with values",
    placeholder: "Won't pick anything",
    disabled: true,
    defaultValue: ["react", "vue"]
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=MultiSelect.demo.disabled.js.map
