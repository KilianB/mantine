import React from 'react';
import { Group, Text } from '@mantine/core';

const code = `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Indigo cyan gradient
    </Text>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Text, {
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan", deg: 45 },
    sx: { fontFamily: "Greycliff CF, sans-serif" },
    ta: "center",
    fz: "xl",
    fw: 700
  }, "Indigo cyan gradient"));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

export { gradient };
//# sourceMappingURL=Text.demo.gradient.js.map
