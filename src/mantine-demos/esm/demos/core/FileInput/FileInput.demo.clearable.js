import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" clearable />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, {
    maw: 320,
    mx: "auto",
    label: "Upload files",
    placeholder: "Upload files",
    clearable: true
  });
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

export { clearable };
//# sourceMappingURL=FileInput.demo.clearable.js.map
