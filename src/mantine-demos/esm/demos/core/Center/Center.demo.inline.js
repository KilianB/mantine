import React from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useMantineTheme, Anchor, Center, rem, Box } from '@mantine/core';

const code = `
import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft size={rem(14)} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Anchor, {
    href: "https://mantine.dev",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Center, {
    inline: true
  }, theme.dir === "ltr" ? /* @__PURE__ */ React.createElement(IconArrowLeft, {
    size: rem(14)
  }) : /* @__PURE__ */ React.createElement(IconArrowRight, {
    size: rem(14)
  }), /* @__PURE__ */ React.createElement(Box, {
    ml: 5
  }, "Back to Mantine website")));
}
const inline = {
  type: "demo",
  code,
  component: Demo
};

export { inline };
//# sourceMappingURL=Center.demo.inline.js.map
