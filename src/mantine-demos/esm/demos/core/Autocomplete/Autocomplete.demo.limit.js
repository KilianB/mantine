import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Only 2 options at a time"
      placeholder="Your favorite framework"
      limit={2}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Autocomplete, {
    maw: 320,
    mx: "auto",
    label: "Only 2 options at a time",
    placeholder: "Your favorite framework",
    limit: 2,
    data: ["React", "Angular", "Svelte", "Vue"]
  });
}
const limit = {
  type: "demo",
  code,
  component: Demo
};

export { limit };
//# sourceMappingURL=Autocomplete.demo.limit.js.map
