'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _Item = require('./_Item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: '62rem', cols: 3, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.SimpleGrid, {
    cols: 4,
    spacing: "lg",
    id: "grid-breakpoints",
    breakpoints: [
      { maxWidth: "62rem", cols: 3, spacing: "md" },
      { maxWidth: "48rem", cols: 2, spacing: "sm" },
      { maxWidth: "36rem", cols: 1, spacing: "sm" }
    ]
  }, _Item.defaultItems);
}
const breakpoints = {
  type: "demo",
  component: Demo,
  code
};

exports.breakpoints = breakpoints;
//# sourceMappingURL=SimpleGrid.demo.breakpoints.js.map
