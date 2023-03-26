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
    <>
      {/* No transitions */}
      <SegmentedControl transitionDuration={0} />

      {/* 500ms linear transition */}
      <SegmentedControl
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Flex, {
    direction: "column",
    align: "center"
  }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    weight: 500,
    mt: 3
  }, "No transitions"), /* @__PURE__ */ React__default.createElement(Wrapper.SegmentedControlWrapper, {
    transitionDuration: 0
  })), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    weight: 500,
    mt: "md"
  }, "500ms linear transition"), /* @__PURE__ */ React__default.createElement(Wrapper.SegmentedControlWrapper, {
    transitionDuration: 500,
    transitionTimingFunction: "linear"
  })));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

exports.transitions = transitions;
//# sourceMappingURL=SegmentedControl.demo.transitions.js.map
