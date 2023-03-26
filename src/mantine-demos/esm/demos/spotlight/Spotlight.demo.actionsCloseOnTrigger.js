import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider, SpotlightAction } from '@mantine/spotlight';

const onTrigger = () => {};

const actions: SpotlightAction[] = [
  { title: 'Will stay open', onTrigger, closeOnTrigger: false },
  { title: 'Will close', onTrigger, closeOnTrigger: true },
];

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 5"
    >
      <App />
    </SpotlightProvider>
  );
}
`;
const onTrigger = () => {
};
const actions = [
  { title: "Will stay open", onTrigger, closeOnTrigger: false },
  { title: "Will close", onTrigger, closeOnTrigger: true }
];
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    actions,
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + 5"
  });
}
const actionsCloseOnTrigger = {
  type: "demo",
  component: Demo,
  code
};

export { actionsCloseOnTrigger };
//# sourceMappingURL=Spotlight.demo.actionsCloseOnTrigger.js.map
