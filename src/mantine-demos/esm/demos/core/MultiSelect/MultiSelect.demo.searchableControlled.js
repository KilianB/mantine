import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      searchable
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      nothingFound="Nothing found"
    />
  );
}
`;
function Demo() {
  const [searchValue, onSearchChange] = useState("");
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    searchable: true,
    searchValue,
    onSearchChange,
    nothingFound: "Nothing found"
  });
}
const searchableControlled = {
  type: "demo",
  code,
  component: Demo
};

export { searchableControlled };
//# sourceMappingURL=MultiSelect.demo.searchableControlled.js.map
