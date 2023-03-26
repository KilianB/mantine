import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Autocomplete, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    data: ["React", "Angular", "Svelte", "Vue"],
    transitionProps: { transition: "pop-top-left", duration: 80, timingFunction: "ease" }
  });
}
const animations = {
  type: "demo",
  code,
  component: Demo
};

export { animations };
//# sourceMappingURL=Autocomplete.demo.animations.js.map
