import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider, SpotlightAction } from '@mantine/spotlight';

const onTrigger = () => {};

const actions: SpotlightAction[] = [
  { title: 'Home', group: 'main', onTrigger },
  { title: 'Docs', group: 'main', onTrigger },
  { title: 'Dashboard', group: 'main', onTrigger },
  { title: 'Component: Tabs', group: 'search', onTrigger },
  { title: 'Component: SegmentedControl', group: 'search', onTrigger },
  { title: 'Component: Button', group: 'search', onTrigger },
];

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchPlaceholder="Search..."
      shortcut="mod + shift + V"
    >
      <App />
    </SpotlightProvider>
  );
}
`;
const onTrigger = () => {
};
const actions = [
  { title: "Home", group: "main", onTrigger },
  { title: "Docs", group: "main", onTrigger },
  { title: "Dashboard", group: "main", onTrigger },
  { title: "Component: Tabs", group: "search", onTrigger },
  { title: "Component: SegmentedControl", group: "search", onTrigger },
  { title: "Component: Button", group: "search", onTrigger }
];
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    actions,
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + V"
  });
}
const groups = {
  type: "demo",
  component: Demo,
  code
};

export { groups };
//# sourceMappingURL=Spotlight.demo.groups.js.map
