import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like"
  });
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=MultiSelect.demo.usage.js.map
