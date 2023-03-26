import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      rightSection={<IconChevronDown size="1rem" />}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSectionWidth={40}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    rightSection: /* @__PURE__ */ React.createElement(IconChevronDown, {
      size: "1rem"
    }),
    styles: { rightSection: { pointerEvents: "none" } },
    rightSectionWidth: 40
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=MultiSelect.demo.rightSection.js.map
