import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';
import { data } from './_data.js';

const code = `
import { MultiSelect } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return <MultiSelect icon={<IconHash />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MultiSelect, {
    maw: 400,
    mx: "auto",
    data,
    label: "Pick hashtags",
    placeholder: "Pick all that you like",
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
//# sourceMappingURL=MultiSelect.demo.icon.js.map
