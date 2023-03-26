import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <Select
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size="1rem" />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Pick a hashtag",
    placeholder: "Pick a hashtag",
    data: ["React", "Angular", "Svelte", "Vue"],
    icon: /* @__PURE__ */ React.createElement(IconHash, {
      size: "1rem"
    }),
    withinPortal: true
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=Select.demo.icon.js.map
