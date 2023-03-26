'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>

      <Tooltip label="Arrow with size" withArrow arrowSize={6}>
        <Button variant="outline">With size</Button>
      </Tooltip>

      <Tooltip label="Arrow with radius" withArrow arrowSize={6} arrowRadius={4}>
        <Button variant="outline">With radius</Button>
      </Tooltip>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Default arrow",
    withArrow: true
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Default arrow")), /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Arrow with size",
    withArrow: true,
    arrowSize: 6
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "With size")), /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Arrow with radius",
    withArrow: true,
    arrowSize: 6,
    arrowRadius: 4
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "With radius")));
}
const arrow = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.arrow = arrow;
//# sourceMappingURL=Tooltip.demo.arrow.js.map
