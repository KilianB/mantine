import React from 'react';
import { IconFlame } from '@tabler/icons-react';
import { Blockquote } from '@mantine/core';

const code = `
import { Blockquote } from '@mantine/core';
import { IconFlame } from '@tabler/icons-react';

function Demo() {
  return (
    <Blockquote
      cite="\u2013 Your poor i3 from 2012 struggling its best"
      icon={<IconFlame size="1.5rem" />}
    >
      webpack built caa9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Blockquote, {
    maw: 420,
    mx: "auto",
    cite: "\u2013 Your poor i3 from 2012 struggling its best",
    icon: /* @__PURE__ */ React.createElement(IconFlame, {
      size: "1.5rem"
    })
  }, "webpack built 40a9bf3d1a0a0914ed84 in 28259ms");
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=Blockquote.demo.icon.js.map
