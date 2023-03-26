'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
function Demo() {
  return (
    <TransferList
      searchPlaceholder={['Search item to add...', 'Search item to remove...']}
      nothingFound={['Cannot find item to add', 'Cannot find item to remove']}
      placeholder={['No item left to add', 'No item left ro remove']}
      {/* ...other props */}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    searchPlaceholder: ["Search item to add...", "Search item to remove..."],
    nothingFound: ["Cannot find item to add", "Cannot find item to remove"],
    placeholder: ["No item left to add", "No item left ro remove"],
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm"
  });
}
const differentPlaceholders = {
  type: "demo",
  component: Demo,
  code
};

exports.differentPlaceholders = differentPlaceholders;
//# sourceMappingURL=TransferList.demo.differentPlaceholders.js.map
