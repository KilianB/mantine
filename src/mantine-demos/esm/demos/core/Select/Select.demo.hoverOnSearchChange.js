import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      searchable
      hoverOnSearchChange
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    nothingFound: "No options",
    data: ["React", "Angular", "Svelte", "Vue"],
    withinPortal: true,
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
//# sourceMappingURL=Select.demo.hoverOnSearchChange.js.map
