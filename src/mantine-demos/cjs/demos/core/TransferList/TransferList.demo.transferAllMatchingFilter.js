'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<TransferList transferAllMatchingFilter />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm",
    transferAllMatchingFilter: true
  });
}
const transferAllMatchingFilter = {
  type: "demo",
  component: Demo,
  code
};

exports.transferAllMatchingFilter = transferAllMatchingFilter;
//# sourceMappingURL=TransferList.demo.transferAllMatchingFilter.js.map
