import React from 'react';
import { IconMedal } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';
import { IconMedal } from '@tabler/icons-react';

function Demo() {
  return (
    <NumberInput
      label="Age when you graduated"
      placeholder="Age when you graduated"
      defaultValue={22}
      min={0}
      max={120}
      icon={<IconMedal size="1rem" />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NumberInput, {
    maw: 320,
    mx: "auto",
    label: "Age when you graduated",
    placeholder: "Age when you graduated",
    defaultValue: 22,
    min: 0,
    max: 120,
    icon: /* @__PURE__ */ React.createElement(IconMedal, {
      size: "1rem"
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=NumberInput.demo.icon.js.map
