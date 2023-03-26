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
  return (
    <>
      <Prism noCopy language="tsx">{/* ...code */}</Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
      >
        {/* ...code */}
      </Prism>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    noCopy: true
  }, demoCode), /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    copyLabel: "Copy code to clipboard",
    copiedLabel: "Code copied to clipboard",
    mt: "lg"
  }, demoCode));
}
const copyLabel = {
  type: "demo",
  component: Demo,
  code
};

export { copyLabel };
//# sourceMappingURL=Prism.demo.copyLabel.js.map
