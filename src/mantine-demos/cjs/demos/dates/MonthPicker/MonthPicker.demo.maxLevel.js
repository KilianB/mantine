'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.MonthPicker, {
    maxLevel: "year"
  }));
}
const maxLevel = {
  type: "demo",
  component: Demo,
  code
};

exports.maxLevel = maxLevel;
//# sourceMappingURL=MonthPicker.demo.maxLevel.js.map
