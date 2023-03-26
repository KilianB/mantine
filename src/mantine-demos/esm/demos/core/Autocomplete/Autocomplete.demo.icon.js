import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { Autocomplete, rem } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return <Autocomplete icon={<IconHash />} data={['React', 'Angular', 'Svelte', 'Vue']} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Autocomplete, {
    maw: 320,
    mx: "auto",
    label: "Enter a hashtag",
    placeholder: "Enter a hashtag",
    data: ["React", "Angular", "Svelte", "Vue"],
    icon: /* @__PURE__ */ React.createElement(IconHash, {
      size: rem(14)
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=Autocomplete.demo.icon.js.map
