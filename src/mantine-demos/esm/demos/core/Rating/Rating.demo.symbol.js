import React from 'react';
import { Group, Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const code = `
import { Group, Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Rating, {
    emptySymbol: /* @__PURE__ */ React.createElement(IconSun, {
      size: "1rem"
    }),
    fullSymbol: /* @__PURE__ */ React.createElement(IconMoon, {
      size: "1rem"
    })
  }));
}
const symbol = {
  type: "demo",
  component: Demo,
  code
};

export { symbol };
//# sourceMappingURL=Rating.demo.symbol.js.map
