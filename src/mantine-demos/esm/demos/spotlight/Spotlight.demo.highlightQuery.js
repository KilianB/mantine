import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + L"
      highlightQuery
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
    searchPlaceholder: "Search...",
    shortcut: "mod + alt + L",
    highlightQuery: true
  });
}
const highlightQuery = {
  type: "demo",
  component: Demo,
  code
};

export { highlightQuery };
//# sourceMappingURL=Spotlight.demo.highlightQuery.js.map
