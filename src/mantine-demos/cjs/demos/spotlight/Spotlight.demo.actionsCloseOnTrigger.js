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
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
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

exports.actionsCloseOnTrigger = actionsCloseOnTrigger;
//# sourceMappingURL=Spotlight.demo.actionsCloseOnTrigger.js.map
