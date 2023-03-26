'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
      withinPortal
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    data: ["React", "Angular", "Svelte", "Vue"],
    transitionProps: { transition: "pop-top-left", duration: 80, timingFunction: "ease" },
    withinPortal: true
  });
}
const animations = {
  type: "demo",
  code,
  component: Demo
};

exports.animations = animations;
//# sourceMappingURL=Select.demo.animations.js.map
