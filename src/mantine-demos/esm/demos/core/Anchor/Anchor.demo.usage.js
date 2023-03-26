import React from 'react';
import { Anchor } from '@mantine/core';

const code = `
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Anchor, {
    href: "https://mantine.dev/",
    target: "_blank"
  }, "Mantine docs");
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Anchor.demo.usage.js.map
