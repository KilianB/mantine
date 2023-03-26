import React from 'react';
import { Prism } from '@mantine/prism';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import { Prism } from '@mantine/prism';

const demoCode = \`import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return (
    <Prism
      language="tsx"
      getPrismTheme={(_theme, colorScheme) =>
        colorScheme === 'light' ? duotoneLight : duotoneDark
      }
    >
      {demoCode}
    </Prism>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    getPrismTheme: (_theme, colorScheme) => colorScheme === "light" ? duotoneLight : duotoneDark
  }, demoCode);
}
const prismTheme = {
  type: "demo",
  component: Demo,
  code
};

export { demoCode, prismTheme };
//# sourceMappingURL=Prism.demo.prismTheme.js.map
