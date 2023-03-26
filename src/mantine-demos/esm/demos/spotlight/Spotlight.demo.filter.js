import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + V"
      nothingFoundMessage="Nothing found..."
      filter={(query, actions) =>
        actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase()))
      }
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
    shortcut: "mod + alt + V",
    nothingFoundMessage: "Nothing found...",
    filter: (query, actions) => actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase())),
    buttonLabel: "Open spotlight"
  });
}
const filter = {
  type: "demo",
  component: Demo,
  code
};

export { filter };
//# sourceMappingURL=Spotlight.demo.filter.js.map
