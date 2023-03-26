import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    rightSection: /* @__PURE__ */ React.createElement(IconChevronDown, {
      size: "1rem"
    }),
    rightSectionWidth: 30,
    styles: { rightSection: { pointerEvents: "none" } },
    data: ["React", "Angular", "Svelte", "Vue"],
    withinPortal: true
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=Select.demo.rightSection.js.map
