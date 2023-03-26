import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + 2"
      transitionProps={{ duration: 300, transition: 'slide-down' }}
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
      size: 18
    }),
    transitionProps: { duration: 300, transition: "slide-down" },
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + L",
    buttonLabel: "Open spotlight with custom transition"
  });
}
const customTransition = {
  type: "demo",
  component: Demo,
  code
};

export { customTransition };
//# sourceMappingURL=Spotlight.demo.customTransition.js.map
