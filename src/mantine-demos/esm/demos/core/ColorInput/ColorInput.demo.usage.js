import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput placeholder="Pick color" label="Your favorite color" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ColorInput, {
    maw: 320,
    mx: "auto",
    placeholder: "Pick color",
    label: "Your favorite color",
    defaultValue: "#ffffff"
  });
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=ColorInput.demo.usage.js.map
