'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { IconPaint } from '@tabler/icons-react';
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Remove color preview */}
      <ColorInput
        label="Without preview"
        placeholder="No color preview"
        withPreview={false}
      />

      {/* Replace color preview with any React node */}
      <ColorInput
        icon={<IconPaint size="1rem" />}
        label="With icon"
        placeholder="With icon"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    label: "Without preview",
    placeholder: "No color preview",
    withPreview: false
  }), /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    mt: "md",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconPaint, {
      size: "1rem"
    }),
    label: "With icon",
    placeholder: "With icon"
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=ColorInput.demo.icon.js.map
