import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      data={[/* ...data */]}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    transitionProps: { duration: 150, transition: "pop-top-left", timingFunction: "ease" },
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like"
  });
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=MultiSelect.demo.transitions.js.map
