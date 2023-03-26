import React from 'react';
import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" icon={<IconAt size="0.8rem" />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TextInput, {
    maw: 320,
    mx: "auto",
    label: "Your email",
    placeholder: "Your email",
    icon: /* @__PURE__ */ React.createElement(IconAt, {
      size: "0.8rem"
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=TextInput.demo.icon.js.map
