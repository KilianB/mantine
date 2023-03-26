import React from 'react';
import { IconUpload } from '@tabler/icons-react';
import { FileInput, rem } from '@mantine/core';

const code = `
import { FileInput, rem } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

function Demo() {
  return <FileInput label="Your resume" placeholder="Your resume" icon={<IconUpload size={rem(14)} />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, {
    maw: 320,
    mx: "auto",
    label: "Your resume",
    placeholder: "Your resume",
    icon: /* @__PURE__ */ React.createElement(IconUpload, {
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
//# sourceMappingURL=FileInput.demo.icon.js.map
