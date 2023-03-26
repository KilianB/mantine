import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, {
    maw: 320,
    mx: "auto",
    label: "Upload files",
    placeholder: "Upload files",
    multiple: true
  });
}
const multiple = {
  type: "demo",
  code,
  component: Demo
};

export { multiple };
//# sourceMappingURL=FileInput.demo.multiple.js.map
