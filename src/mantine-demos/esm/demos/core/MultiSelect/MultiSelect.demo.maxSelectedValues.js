import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return <MultiSelect maxSelectedValues={3} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    label: "Pick 3 values or less",
    placeholder: "Pick 3 values or less",
    searchable: true,
    maxSelectedValues: 3
  });
}
const maxSelectedValues = {
  type: "demo",
  code,
  component: Demo
};

export { maxSelectedValues };
//# sourceMappingURL=MultiSelect.demo.maxSelectedValues.js.map
