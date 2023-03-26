import React from 'react';
import { Box, Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return <Autocomplete disabled data={['React', 'Angular', 'Svelte', 'Vue']} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Autocomplete, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled without value",
    placeholder: "Pick all that you like",
    disabled: true
  }), /* @__PURE__ */ React.createElement(Autocomplete, {
    mt: "md",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled with value",
    placeholder: "Pick all that you like",
    disabled: true,
    value: "React"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=Autocomplete.demo.disabled.js.map
