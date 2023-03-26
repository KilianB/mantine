'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import {
  IconFilePlus,
  IconFolderPlus,
  IconFileMinus,
  IconFolderMinus,
} from '@tabler/icons-react';
import { TransferList } from '@mantine/core';

function Demo() {
  return (
    <TransferList
      transferIcon={({ reversed }) => (reversed ? <IconFileMinus /> : <IconFilePlus />)}
      transferAllIcon={({ reversed }) => (reversed ? <IconFolderMinus /> : <IconFolderPlus />)}
      {/* ...other props */}
    />
  )
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm",
    transferIcon: ({ reversed }) => reversed ? /* @__PURE__ */ React__default.createElement(iconsReact.IconFileMinus, null) : /* @__PURE__ */ React__default.createElement(iconsReact.IconFilePlus, null),
    transferAllIcon: ({ reversed }) => reversed ? /* @__PURE__ */ React__default.createElement(iconsReact.IconFolderMinus, null) : /* @__PURE__ */ React__default.createElement(iconsReact.IconFolderPlus, null)
  });
}
const customIcons = {
  type: "demo",
  component: Demo,
  code
};

exports.customIcons = customIcons;
//# sourceMappingURL=TransferList.demo.customIcons.js.map
