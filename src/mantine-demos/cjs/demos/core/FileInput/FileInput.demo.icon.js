'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { FileInput, rem } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

function Demo() {
  return <FileInput label="Your resume" placeholder="Your resume" icon={<IconUpload size={rem(14)} />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.FileInput, {
    maw: 320,
    mx: "auto",
    label: "Your resume",
    placeholder: "Your resume",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconUpload, {
      size: core.rem(14)
    })
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=FileInput.demo.icon.js.map
