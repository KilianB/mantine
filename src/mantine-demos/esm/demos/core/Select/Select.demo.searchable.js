import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    searchable: true,
    nothingFound: "No options",
    data: ["React", "Angular", "Svelte", "Vue"],
    withinPortal: true
  });
}
const searchable = {
  type: "demo",
  code,
  component: Demo
};

export { searchable };
//# sourceMappingURL=Select.demo.searchable.js.map
