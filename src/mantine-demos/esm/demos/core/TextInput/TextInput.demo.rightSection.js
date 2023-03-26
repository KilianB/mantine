import React from 'react';
import { TextInput, Loader } from '@mantine/core';

const code = `
import { TextInput, Loader } from '@mantine/core';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TextInput, {
    maw: 320,
    mx: "auto",
    label: "Your email",
    placeholder: "Your email",
    defaultValue: "asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb",
    rightSection: /* @__PURE__ */ React.createElement(Loader, {
      size: "xs"
    })
  });
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=TextInput.demo.rightSection.js.map
