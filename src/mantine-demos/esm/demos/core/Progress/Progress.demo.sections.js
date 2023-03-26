import React from 'react';
import { Progress } from '@mantine/core';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Progress, {
    size: "xl",
    sections: [
      { value: 40, color: "cyan" },
      { value: 20, color: "blue" },
      { value: 15, color: "indigo" }
    ]
  });
}
const sections = {
  type: "demo",
  code,
  component: Demo
};

export { sections };
//# sourceMappingURL=Progress.demo.sections.js.map
