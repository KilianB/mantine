'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Wrapper = require('./Wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(Wrapper.SegmentedControlWrapper, null));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=SegmentedControl.demo.usage.js.map
