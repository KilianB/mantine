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
      transitionProps={{ duration: 0 }}
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
      size: "1.2rem"
    }),
    transitionProps: { duration: 0 },
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + 2",
    buttonLabel: "Open spotlight without transition"
  });
}
const transitionNone = {
  type: "demo",
  component: Demo,
  code
};

exports.transitionNone = transitionNone;
//# sourceMappingURL=Spotlight.demo.transitionNone.js.map
