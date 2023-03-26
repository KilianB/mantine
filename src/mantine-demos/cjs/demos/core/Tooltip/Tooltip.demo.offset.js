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
      <Tooltip label="Default arrow" offset={20}>
        <Button variant="outline">20 offset</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" offset={-10}>
        <Button variant="outline">-10 offset</Button>
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
    offset: 20
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "20 offset")), /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Arrow with size",
    offset: -10
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "-10 offset")));
}
const offset = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.offset = offset;
//# sourceMappingURL=Tooltip.demo.offset.js.map
