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
      shortcut="mod + alt + L"
      highlightQuery
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
    searchPlaceholder: "Search...",
    shortcut: "mod + alt + L",
    highlightQuery: true
  });
}
const highlightQuery = {
  type: "demo",
  component: Demo,
  code
};

exports.highlightQuery = highlightQuery;
//# sourceMappingURL=Spotlight.demo.highlightQuery.js.map
