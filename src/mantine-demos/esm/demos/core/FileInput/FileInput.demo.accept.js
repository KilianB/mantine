import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" accept="image/png,image/jpeg" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, {
    maw: 320,
    mx: "auto",
    label: "Upload files",
    placeholder: "Upload files",
    accept: "image/png,image/jpeg"
  });
}
const accept = {
  type: "demo",
  code,
  component: Demo
};

export { accept };
//# sourceMappingURL=FileInput.demo.accept.js.map
