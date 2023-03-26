'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button">Button input</Input>

      <Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Input, {
    component: "button"
  }, "Button input"), /* @__PURE__ */ React__default.createElement(core.Input, {
    mt: "md",
    component: "select",
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronDown, {
      size: 14,
      stroke: 1.5
    })
  }, /* @__PURE__ */ React__default.createElement("option", {
    value: "1"
  }, "1"), /* @__PURE__ */ React__default.createElement("option", {
    value: "2"
  }, "2")));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

exports.component = component;
//# sourceMappingURL=Input.demo.component.js.map
