import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + G",
    closeOnActionTrigger: false
  });
}
const closeOnTrigger = {
  type: "demo",
  component: Demo,
  code
};

export { closeOnTrigger };
//# sourceMappingURL=Spotlight.demo.closeOnTrigger.js.map
