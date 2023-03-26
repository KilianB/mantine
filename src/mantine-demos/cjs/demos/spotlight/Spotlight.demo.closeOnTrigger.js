'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
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

exports.closeOnTrigger = closeOnTrigger;
//# sourceMappingURL=Spotlight.demo.closeOnTrigger.js.map
