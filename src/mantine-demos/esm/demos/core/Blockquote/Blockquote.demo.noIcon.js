import React from 'react';
import { Blockquote } from '@mantine/core';

const code = `
import { Blockquote } from '@mantine/core';

function Demo() {
  return (
    <Blockquote cite="\u2013 Your poor i3 from 2012 struggling its best" icon={null}>
      webpack built 40a9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  )
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Blockquote, {
    maw: 420,
    mx: "auto",
    cite: "\u2013 Your poor i3 from 2012 struggling its best",
    icon: null
  }, "webpack built 40a9bf3d1a0a0914ed84 in 28259ms");
}
const noIcon = {
  type: "demo",
  code,
  component: Demo
};

export { noIcon };
//# sourceMappingURL=Blockquote.demo.noIcon.js.map
