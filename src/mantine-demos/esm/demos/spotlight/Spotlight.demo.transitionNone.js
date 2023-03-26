import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + 2"
      transitionProps={{ duration: 0 }}
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    searchIcon: /* @__PURE__ */ React.createElement(IconSearch, {
      size: "1.2rem"
    }),
    transitionProps: { duration: 0 },
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + 2",
    buttonLabel: "Open spotlight without transition"
  });
}
const transitionNone = {
  type: "demo",
  component: Demo,
  code
};

export { transitionNone };
//# sourceMappingURL=Spotlight.demo.transitionNone.js.map
