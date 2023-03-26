import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      hoverOnSearchChange
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Autocomplete, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    data: ["React", "Angular", "Svelte", "Vue"],
    hoverOnSearchChange: true
  }));
}
const hoverOnChange = {
  type: "demo",
  code,
  component: Demo
};

export { hoverOnChange };
//# sourceMappingURL=Autocomplete.demo.hoverOnChange.js.map
