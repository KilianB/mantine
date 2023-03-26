'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
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

exports.groups = groups;
//# sourceMappingURL=Spotlight.demo.groups.js.map
