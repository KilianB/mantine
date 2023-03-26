import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
import { Prism } from '@mantine/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    withLineNumbers: true
  }, demoCode);
}
const lineNumbers = {
  type: "demo",
  component: Demo,
  code
};

export { lineNumbers };
//# sourceMappingURL=Prism.demo.lineNumbers.js.map
