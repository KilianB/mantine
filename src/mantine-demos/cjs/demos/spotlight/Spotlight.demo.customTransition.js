'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + 2"
      transitionProps={{ duration: 300, transition: 'slide-down' }}
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    searchIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, {
      size: 18
    }),
    transitionProps: { duration: 300, transition: "slide-down" },
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + L",
    buttonLabel: "Open spotlight with custom transition"
  });
}
const customTransition = {
  type: "demo",
  component: Demo,
  code
};

exports.customTransition = customTransition;
//# sourceMappingURL=Spotlight.demo.customTransition.js.map
