import React from 'react';
import { Progress } from '@mantine/core';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress
      radius="xl"
      size={24}
      sections={[
        { value: 33, color: 'pink', label: 'Documents', tooltip: 'Document \u2013 33 Gb' },
        { value: 28, color: 'grape', label: 'Apps', tooltip: 'Apps \u2013 28 Gb' },
        { value: 25, color: 'violet', label: 'Other', tooltip: 'Other \u2013 25 Gb' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Progress, {
    radius: "xl",
    size: 24,
    sections: [
      { value: 33, color: "pink", label: "Documents", tooltip: "Document \u2013 33 Gb" },
      { value: 28, color: "grape", label: "Apps", tooltip: "Apps \u2013 28 Gb" },
      { value: 25, color: "violet", label: "Other", tooltip: "Other \u2013 25 Gb" }
    ]
  });
}
const tooltip = {
  type: "demo",
  code,
  component: Demo
};

export { tooltip };
//# sourceMappingURL=Progress.demo.tooltip.js.map
