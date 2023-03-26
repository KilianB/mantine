import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TimeInput, {
    withSeconds: true,
    maw: 400,
    mx: "auto"
  });
}
const withSeconds = {
  type: "demo",
  component: Demo,
  code
};

export { withSeconds };
//# sourceMappingURL=TimeInput.demo.withSeconds.js.map
