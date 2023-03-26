import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <NativeSelect
      label="Your favorite library/framework"
      placeholder="Your favorite library/framework"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={40}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NativeSelect, {
    maw: 320,
    mx: "auto",
    label: "Your favorite library/framework",
    placeholder: "Your favorite library/framework",
    data: ["React", "Angular", "Svelte", "Vue"],
    rightSection: /* @__PURE__ */ React.createElement(IconChevronDown, {
      size: "1rem"
    }),
    rightSectionWidth: 30
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=NativeSelect.demo.rightSection.js.map
