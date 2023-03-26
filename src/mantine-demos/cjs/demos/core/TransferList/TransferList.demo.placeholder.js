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
      nothingFound="Nothing found"
      placeholder="No item left"
      {/* ...other props */}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    nothingFound: "Nothing found",
    placeholder: "No item left",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm"
  });
}
const placeholder = {
  type: "demo",
  component: Demo,
  code
};

exports.placeholder = placeholder;
//# sourceMappingURL=TransferList.demo.placeholder.js.map
