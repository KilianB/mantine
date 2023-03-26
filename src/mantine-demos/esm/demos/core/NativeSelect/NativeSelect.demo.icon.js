import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <NativeSelect
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size="1rem" />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NativeSelect, {
    maw: 320,
    mx: "auto",
    label: "Pick a hashtag",
    placeholder: "Pick a hashtag",
    data: ["React", "Angular", "Svelte", "Vue"],
    icon: /* @__PURE__ */ React.createElement(IconHash, {
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
//# sourceMappingURL=NativeSelect.demo.icon.js.map
