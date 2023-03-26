import React from 'react';
import { Box, DEFAULT_THEME } from '@mantine/core';

const demoBase = {
  wrapper: ({ children }) => /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, children),
  background: (colorScheme) => colorScheme === "dark" ? DEFAULT_THEME.colors.dark[7] : DEFAULT_THEME.colors.gray[0]
};

export { demoBase };
//# sourceMappingURL=_demo-base.js.map
