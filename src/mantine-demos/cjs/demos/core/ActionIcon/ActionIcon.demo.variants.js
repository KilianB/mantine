'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <ActionIcon variant="transparent"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="subtle"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="outline"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="light"><IconSettings size="1rem" /></ActionIcon>
    </>
  );
}
`;
const icon = /* @__PURE__ */ React__default.createElement(iconsReact.IconSettings, {
  size: "1rem"
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "transparent",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "subtle",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "default",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "outline",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "filled",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "light",
    color: "blue"
  }, icon));
}
const variants = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.variants = variants;
//# sourceMappingURL=ActionIcon.demo.variants.js.map
