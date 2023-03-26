import React from 'react';
import { InputBase, Input } from '@mantine/core';

const code = `
import { Input, InputBase } from '@mantine/core';

function Demo() {
  return (
    <InputBase component="button" label="Input base button with placeholder">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </InputBase>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(InputBase, {
    component: "button",
    label: "Input base button with placeholder"
  }, /* @__PURE__ */ React.createElement(Input.Placeholder, null, "Placeholder content"));
}
const basePlaceholder = {
  type: "demo",
  component: Demo,
  code
};

export { basePlaceholder };
//# sourceMappingURL=Input.demo.basePlaceholder.js.map
