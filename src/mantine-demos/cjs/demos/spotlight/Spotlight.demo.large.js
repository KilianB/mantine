'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
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

exports.large = large;
//# sourceMappingURL=Spotlight.demo.large.js.map
