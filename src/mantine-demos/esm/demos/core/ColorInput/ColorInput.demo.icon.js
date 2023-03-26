import React from 'react';
import { IconPaint } from '@tabler/icons-react';
import { Box, ColorInput } from '@mantine/core';

const code = `
import { IconPaint } from '@tabler/icons-react';
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Remove color preview */}
      <ColorInput
        label="Without preview"
        placeholder="No color preview"
        withPreview={false}
      />

      {/* Replace color preview with any React node */}
      <ColorInput
        icon={<IconPaint size="1rem" />}
        label="With icon"
        placeholder="With icon"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    label: "Without preview",
    placeholder: "No color preview",
    withPreview: false
  }), /* @__PURE__ */ React.createElement(ColorInput, {
    mt: "md",
    icon: /* @__PURE__ */ React.createElement(IconPaint, {
      size: "1rem"
    }),
    label: "With icon",
    placeholder: "With icon"
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=ColorInput.demo.icon.js.map
