import React from 'react';
import { Progress } from '@mantine/core';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;
function Label() {
  return /* @__PURE__ */ React.createElement(Progress, {
    value: 75,
    animate: true
  });
}
const animations = {
  type: "demo",
  code,
  component: Label
};

export { animations };
//# sourceMappingURL=Progress.demo.animations.js.map
