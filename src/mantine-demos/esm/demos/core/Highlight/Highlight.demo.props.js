import React from 'react';
import { Highlight } from '@mantine/core';

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Mantine website
    </Highlight>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Highlight, {
    component: "a",
    href: "https://mantine.dev",
    target: "_blank",
    highlight: "mantine",
    fw: 500
  }, "Mantine website");
}
const props = {
  type: "demo",
  code,
  component: Demo
};

export { props };
//# sourceMappingURL=Highlight.demo.props.js.map
