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
      hoverOnSearchChange
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    searchable: true,
    hoverOnSearchChange: true
  }));
}
const hoverOnSearchChange = {
  type: "demo",
  code,
  component: Demo
};

export { hoverOnSearchChange };
//# sourceMappingURL=MultiSelect.demo.hoverOnSearchChange.js.map
