'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress
      radius="xl"
      size={24}
      sections={[
        { value: 33, color: 'pink', label: 'Documents', tooltip: 'Document \u2013 33 Gb' },
        { value: 28, color: 'grape', label: 'Apps', tooltip: 'Apps \u2013 28 Gb' },
        { value: 25, color: 'violet', label: 'Other', tooltip: 'Other \u2013 25 Gb' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Progress, {
    radius: "xl",
    size: 24,
    sections: [
      { value: 33, color: "pink", label: "Documents", tooltip: "Document \u2013 33 Gb" },
      { value: 28, color: "grape", label: "Apps", tooltip: "Apps \u2013 28 Gb" },
      { value: 25, color: "violet", label: "Other", tooltip: "Other \u2013 25 Gb" }
    ]
  });
}
const tooltip = {
  type: "demo",
  code,
  component: Demo
};

exports.tooltip = tooltip;
//# sourceMappingURL=Progress.demo.tooltip.js.map
