import React, { useState } from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      onSearchChange={onSearchChange}
      searchValue={searchValue}
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
function Demo() {
  const [searchValue, onSearchChange] = useState("");
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    searchable: true,
    onSearchChange,
    searchValue,
    nothingFound: "No options",
    data: ["React", "Angular", "Svelte", "Vue"],
    withinPortal: true
  });
}
const searchableControlled = {
  type: "demo",
  code,
  component: Demo
};

export { searchableControlled };
//# sourceMappingURL=Select.demo.searchableControlled.js.map
