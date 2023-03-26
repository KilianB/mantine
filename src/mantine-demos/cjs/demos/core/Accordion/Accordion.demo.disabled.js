'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
var React = require('react');
var _mockdata = require('./_mockdata.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control disabled>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;
const baseDemoItems = _mockdata.baseAccordionMockdata.map((item, index) => /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
  key: item.label,
  value: item.id
}, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, {
  disabled: index === 1
}, item.label), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, item.content)));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 380,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Accordion, null, baseDemoItems));
}
const disabled = {
  type: "demo",
  component: Demo,
  code
};

exports.baseDemoItems = baseDemoItems;
exports.disabled = disabled;
//# sourceMappingURL=Accordion.demo.disabled.js.map
