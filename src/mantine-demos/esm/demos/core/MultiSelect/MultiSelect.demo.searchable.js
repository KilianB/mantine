import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      searchable
      nothingFound="Nothing found"
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
    placeholder: "Pick all that you like",
    searchable: true,
    nothingFound: "Nothing found"
  });
}
const searchable = {
  type: "demo",
  code,
  component: Demo
};

export { searchable };
//# sourceMappingURL=MultiSelect.demo.searchable.js.map
