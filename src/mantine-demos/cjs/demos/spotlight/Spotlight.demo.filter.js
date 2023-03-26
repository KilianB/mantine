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
      shortcut="mod + alt + V"
      nothingFoundMessage="Nothing found..."
      filter={(query, actions) =>
        actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase()))
      }
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
    shortcut: "mod + alt + V",
    nothingFoundMessage: "Nothing found...",
    filter: (query, actions) => actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase())),
    buttonLabel: "Open spotlight"
  });
}
const filter = {
  type: "demo",
  component: Demo,
  code
};

exports.filter = filter;
//# sourceMappingURL=Spotlight.demo.filter.js.map
