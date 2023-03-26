import React from 'react';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NativeSelect, {
    maw: 320,
    mx: "auto",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled select",
    placeholder: "Pick one that you like",
    disabled: true
  });
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=NativeSelect.demo.disabled.js.map
