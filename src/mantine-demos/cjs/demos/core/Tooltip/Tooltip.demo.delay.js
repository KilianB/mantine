'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button variant="outline">Delay open - 500ms</Button>
      </Tooltip>

      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button variant="outline">Delay close - 500ms</Button>
      </Tooltip>
    </>
  );
};
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Opened after 500ms",
    openDelay: 500
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Delay open - 500ms")), /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Closes after 500ms",
    closeDelay: 500
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Delay close - 500ms")));
}
const delay = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.delay = delay;
//# sourceMappingURL=Tooltip.demo.delay.js.map
