'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return <Burger opened={opened} onClick={toggle} aria-label={label} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(_base.DemoBase, null));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.usage = usage;
//# sourceMappingURL=Burger.demo.usage.js.map
