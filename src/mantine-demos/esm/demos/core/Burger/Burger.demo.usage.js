import React from 'react';
import { Group } from '@mantine/core';
import { DemoBase } from './_base.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return <Burger opened={opened} onClick={toggle} aria-label={label} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DemoBase, null));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, usage };
//# sourceMappingURL=Burger.demo.usage.js.map
