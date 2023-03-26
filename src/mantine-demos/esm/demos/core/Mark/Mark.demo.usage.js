import React from 'react';
import { Text, Mark } from '@mantine/core';

const code = `
import { Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Mantine</Mark>, you are awesome!
    </Text>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Text, null, "Thanks for stopping by and checking out ", /* @__PURE__ */ React.createElement(Mark, null, "Mantine"), ", you are awesome!");
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Mark.demo.usage.js.map
