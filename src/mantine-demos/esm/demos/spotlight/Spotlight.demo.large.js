import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';

const actions: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: \`Action \${index}\`,
    onTrigger: () => console.log(\`Action \${index}\`),
  }));

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      limit={7}
      searchPlaceholder="Search..."
      shortcut="mod + shift + H"
    >
      <App />
    </SpotlightProvider>
  );
}
`;
const actions = Array(100).fill(0).map((_, index) => ({
  title: `Action ${index}`,
  onTrigger: () => console.log(`Action ${index}`)
}));
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    actions,
    limit: 7,
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + H",
    buttonLabel: "Open spotlight with limit"
  });
}
const large = {
  type: "demo",
  component: Demo,
  code
};

export { large };
//# sourceMappingURL=Spotlight.demo.large.js.map
