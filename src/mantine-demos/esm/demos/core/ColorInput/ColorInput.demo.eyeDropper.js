import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      withEyeDropper
      placeholder="With eye dropper"
      label="Pick any color from the page"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ColorInput, {
    maw: 320,
    mx: "auto",
    withEyeDropper: true,
    placeholder: "With eye dropper",
    label: "Pick any color from the page"
  });
}
const eyeDropper = {
  type: "demo",
  component: Demo,
  code
};

export { eyeDropper };
//# sourceMappingURL=ColorInput.demo.eyeDropper.js.map
