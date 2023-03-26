import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';

const data = [
  //...
];

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Read only multiselect"
      placeholder="Pick all that you like"
      defaultValue={['react', 'ng']}
      readOnly
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    label: "Read only multiselect",
    placeholder: "Pick all that you like",
    defaultValue: ["react", "ng"],
    readOnly: true
  });
}
const readOnly = {
  type: "demo",
  code,
  component: Demo
};

export { readOnly };
//# sourceMappingURL=MultiSelect.demo.readOnly.js.map
